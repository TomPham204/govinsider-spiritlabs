import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";

import { PrismaService } from "@api/prisma/prisma.service";
import { exclude } from "@api/utils/exclude";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserDto) {
    const { email } = user;

    const existedUser = await this.prisma.user.findFirst({ where: { email } });
    if (existedUser) {
      throw new BadRequestException("email is existed.");
    }

    const userResponse = await this.prisma.user.create({ data: user });
    return userResponse;
  }

  async findOne(id: number, isPrivate?: boolean) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (user && !isPrivate) {
      return exclude(user, "password", "refreshToken");
    }
    return user;
  }

  async findByEmail(email: string, isPrivate?: boolean) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (user && !isPrivate) {
      return exclude(user, "password", "refreshToken");
    }
    return user;
  }

  async updateUserRefreshToken(id: number, refreshToken: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException("user not found.");
    }

    const res = await this.prisma.user.update({
      where: { id },
      data: { refreshToken },
    });
    return res;
  }
}
