import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto, RefreshTokenDto } from "@api/user/user.dto";
import { AuthService } from "@api/auth/auth.service";
import { SigninDto } from "./auth.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  async signup(@Body() user: CreateUserDto) {
    const data = await this.authService.signup(user);
    return { data };
  }

  @Post("signin")
  async signin(@Body() user: SigninDto) {
    const userData = await this.authService.signin(user);
    return { data: userData };
  }

  @Post("token")
  async refreshToken(@Body() body: RefreshTokenDto) {
    return { data: await this.authService.refreshToken(body) };
  }
}
