import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth/auth.service';
import { ApiBody, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { UserDto } from './users/user-dto';
import { TokenDto } from './auth/token-dto';

@Controller()
export class AppController {
  
  constructor(private readonly authService: AuthService) {}

  @Get('')
  @ApiOkResponse({
    description: 'Welcome message!'
  })
  async welcome() {
    return 'Trabalho Final Disciplina DM124 - Edson de Senna Júnior'
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiBody({
    type: UserDto
  })
  @ApiCreatedResponse({
    description: 'Token has been succesfully generated',
    type: TokenDto
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
