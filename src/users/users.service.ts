import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private readonly usersRepository: Repository<User>,
  ) {}

  async findUser(id: number) {
    // const user = await this.usersRepository.findOne({
    //     where: { id },
    // });
    // if (!user) {
    //   throw new Error('User not found');
    // }
  }
}
