import { z } from "nestjs-zod/z";

export const GetParams = z.object({
  skip: z
    .string()
    .default("0")
    .transform(Number)
    .refine((a) => a >= 0, { message: "Skip must be >= 0" }),
  take: z
    .string()
    .default("10")
    .transform(Number)
    .refine((take) => take > 0, { message: "Take must be > 0" }),
  keyword: z.string().default(""),
  sortBy: z.string().default(""),
  orderBy: z.enum(["asc", "desc"]).default("desc"),
});
