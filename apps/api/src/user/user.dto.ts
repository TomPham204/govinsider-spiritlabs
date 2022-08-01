import { z } from "nestjs-zod/z";
import { createZodDto } from "nestjs-zod/dto";
import { Role } from "@api/constant/role.enum";

export const UserModel = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string().nullish(),
  roles: z.nativeEnum(Role).array(),
  refreshToken: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  activationKey: z.string().nullish(),
  firstName: z.string(),
  lastName: z.string(),
});

const CreateUser = z.object({
  email: z.string().email().default("minh@gmail.com"),
  firstName: z.string(),
  password: z.string().min(8).max(32).default("password"),
  roles: z.nativeEnum(Role).default(Role.User),
});

const RefreshToken = z.object({
  refresh_token: z.string(),
});

export class CreateUserDto extends createZodDto(CreateUser) {}
export class RefreshTokenDto extends createZodDto(RefreshToken) {}
