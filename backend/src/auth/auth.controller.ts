import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/passport-local.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

  // Email/Password Login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body.email, req.body.password);
  }
}
