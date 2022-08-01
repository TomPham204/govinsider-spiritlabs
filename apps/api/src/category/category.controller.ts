import { Body, Controller, Get, Post, Query, UsePipes } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto, GetCategoriesDto, GetCategoriesDtoSchema } from "./category.dto";
import { CategoryService } from "./category.service";

@ApiTags("category")
@Controller("category")
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  @ApiQuery({ schema: GetCategoriesDtoSchema, name: "vcl" })
  async findMany(@Query() queryDto: GetCategoriesDto) {
    const data = await this.service.findMany(queryDto);

    return { data };
  }

  @Post()
  async create(@Body() category: CreateCategoryDto) {
    const data = await this.service.create(category);
    return { data };
  }
}
