import { PrismaService } from "@api/prisma/prisma.service";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateCategoryDto, GetCategoriesDto } from "./category.dto";
import { Prisma } from "@prisma/client";
import slugify from "slugify";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findMany(query: GetCategoriesDto) {
    const { skip, take, keyword, orderBy, sortBy } = query;
    const prismaQuery: Prisma.CategoryFindManyArgs = {
      orderBy: sortBy ? { [sortBy]: orderBy } : { id: "desc" },
      skip,
      take,
    };
    if (keyword) {
      prismaQuery.where = { name: keyword };
    }
    const data = await this.prisma.category.findMany(prismaQuery);
    return data;
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new NotFoundException("Category is not existed.");
    }

    return category;
  }

  async create(body: CreateCategoryDto) {
    const { name } = body;
    const slug = slugify(name);
    const existed = await this.prisma.category.findFirst({ where: { slug } });

    if (existed) {
      throw new BadRequestException(`Category - ${name} is existed.`);
    }
    return this.prisma.category.create({ data: { name, slug } });
  }
}
