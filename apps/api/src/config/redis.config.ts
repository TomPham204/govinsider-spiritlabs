import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  // url: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
}));
