import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Get,
  Param,
  Injectable,
} from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findUser(@Param('id') id: number) {
    return await this.usersService.findUser(id);
  }
}
