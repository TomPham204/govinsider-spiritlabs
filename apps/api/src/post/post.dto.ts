import { GetParams } from "@api/utils/class";
import { z } from "nestjs-zod/z";
import { createZodDto } from "nestjs-zod/dto";
import { zodToOpenAPI } from "nestjs-zod";

const CreatePost = z.object({
  name: z.string().min(0).max(1000),
  slug: z.string(),
  content: z.string(),
  status: z.string(),
  type: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int().nullish(),
});
export class CreatePostDto extends createZodDto(CreatePost) {}

const GetPosts = z.object({}).merge(GetParams);
export class GetPostsDto extends createZodDto(GetPosts) {}

// TODO: convert string to number
export const GetPostsDtoSchema = zodToOpenAPI(GetPosts);
