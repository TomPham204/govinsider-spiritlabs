import { GetParams } from "@api/utils/class";
import { z } from "nestjs-zod/z";
import { createZodDto } from "nestjs-zod/dto";
import { zodToOpenAPI } from "nestjs-zod";

const CreateCategory = z.object({
  name: z.string().min(0).max(255),
});
export class CreateCategoryDto extends createZodDto(CreateCategory) {}

const GetCategories = z.object({}).merge(GetParams);
export class GetCategoriesDto extends createZodDto(GetCategories) {}
export const GetCategoriesDtoSchema = zodToOpenAPI(GetCategories);
