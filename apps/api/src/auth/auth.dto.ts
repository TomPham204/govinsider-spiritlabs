import * as z from "nestjs-zod/z";
import { createZodDto } from "nestjs-zod/dto";

const Signin = z.object({
  email: z.string().email().default("minh@gmail.com"),
  password: z.string().min(8).max(32).default("password"),
});

export class SigninDto extends createZodDto(Signin) {}
