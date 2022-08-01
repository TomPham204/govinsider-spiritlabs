import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '@api/user/user.service';
import { CreateUserDto, RefreshTokenDto } from '@api/user/user.dto';
import {
  REFRESH_TOKEN_EXPIRE,
  ACCESS_TOKEN_EXPIRE,
  DecodedToken,
} from './constants';
import dayjs = require('dayjs');
import { SigninDto } from './auth.dto';
import { User } from '@prisma/client';
import { exclude } from '@api/utils/exclude';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(userDto: CreateUserDto) {
    const { email, password } = userDto;
    // See if email is in use
    const user = await this.userService.findByEmail(email);
    if (user) {
      return { message: 'Email is exited.' };
    }
    // Hash the users password
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    // Create a new user and save it
    const res = await this.userService.createUser({
      ...userDto,
      password: hash,
    });

    // return the user
    return res;
  }

  async validateUser(userDto: SigninDto) {
    const { email, password } = userDto;
    const user = (await this.userService.findByEmail(email, true)) as User;

    const isValidatePW = await bcrypt.compare(password, user.password!);
    if (isValidatePW) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signin(userDto: SigninDto) {
    const user: Omit<User, 'password'> | null = await this.validateUser(
      userDto,
    );
    if (!user) {
      return { message: 'user is not exited.' };
    }

    const payload = { email: user.email, sub: user.id, roles: user.roles };
    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: REFRESH_TOKEN_EXPIRE,
    });
    const access_token = this.jwtService.sign(payload);
    await this.userService.updateUserRefreshToken(user.id, refresh_token);

    const NOW = dayjs().unix();

    return {
      access_token,
      access_token_expire: ACCESS_TOKEN_EXPIRE + NOW,
      refresh_token,
      refresh_token_expire: REFRESH_TOKEN_EXPIRE + NOW,
      user: exclude(user, 'refreshToken'),
    };
  }

  // TODO: using jwtService.verify to verify user token.
  async refreshToken(queryDto: RefreshTokenDto) {
    const { exp, sub } = this.jwtService.decode(
      queryDto.refresh_token,
    ) as DecodedToken;

    if (dayjs().unix() > exp) {
      throw new UnauthorizedException('refreshToken is expired.');
    }

    const user = await this.userService.findOne(sub, true);
    if (!user || (user as User).refreshToken !== queryDto.refresh_token) {
      throw new BadRequestException('refreshToken is not correct.');
    }

    const payload = { email: user.email, sub: user.id };

    const access_token = this.jwtService.sign(payload);

    const NOW = dayjs().unix();
    return {
      access_token,
      access_token_expire: ACCESS_TOKEN_EXPIRE + NOW,
      refresh_token: queryDto.refresh_token,
      refresh_token_expire: exp,
    };
  }
}
