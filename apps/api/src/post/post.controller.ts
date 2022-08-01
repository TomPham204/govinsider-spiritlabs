import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { CreatePostDto, GetPostsDto, GetPostsDtoSchema } from "./post.dto";
import { PostService } from "./post.service";

@ApiTags("post")
@Controller("post")
export class PostController {
  constructor(private service: PostService) {}

  @Post()
  async create(@Body() body: CreatePostDto) {
    const data = await this.service.create(body);
    return { data };
  }

  @Get()
  @ApiQuery({ schema: GetPostsDtoSchema, name: "vcl" })
  async findMany(@Query() query: GetPostsDto) {
    const data = await this.service.findMany(query);
    return { data };
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const data = await this.service.findOne(id);
    return { data };
  }
}
