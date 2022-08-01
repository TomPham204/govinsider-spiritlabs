import { JwtAuthGuard } from "@api/auth/jwt-auth.guard";
import { Public } from "@api/decorator/public-api.decorator";
import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiTags("user")
@Controller("user")
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get("me")
  @ApiBearerAuth()
  async getUser(@Request() req: any) {
    const data = await this.userService.findOne(req.user.sub);
    return { data };
  }
}
