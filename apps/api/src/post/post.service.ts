import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePostDto, GetPostsDto } from "./post.dto";
import { PrismaService } from "../prisma/prisma.service";
import slugify from "slugify";

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findMany(queryDto: GetPostsDto) {
    const { skip, take } = queryDto;
    return this.prisma.post.findMany({
      skip: skip,
      take: take,
    });
  }

  async create(body: CreatePostDto) {
    const { slug, name } = body;

    if (!slug) {
      body.slug = slugify(name);
    }
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        metas: {
          include: { category: true },
        },
      },
    });

    if (!post) {
      throw new NotFoundException("Post is not existed.");
    }

    return post;
  }
}
