import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}

  async create(createUsersDto: CreateUsersDto) {
    const user = this.usersRepo.create(createUsersDto);
    return await this.usersRepo.save(user);
  }
  async findByEmail(email: string) {
    return await this.usersRepo.findOne({ where: { email } });
  }

  findAll() {
    return this.usersRepo.find();
  }

  async findOne(id: number) {
    return await this.usersRepo.findOne({
      where: { id },
      select: ['firstName', 'lastName', 'email'],
    });
  }

  update(id: number, updateUsersDto: UpdateUsersDto) {
    return { id, updateUsersDto };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
