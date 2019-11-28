import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  
  constructor(private readonly authService: AuthService) {}

  @Get('')
  async welcome() {
    return 'Trabalho Final Disciplina DM124 - Edson de Senna Júnior'
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
