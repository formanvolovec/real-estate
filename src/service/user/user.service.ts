import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
} from '../../common/model/user/request.dto';
import { UserRepository } from '../../repository/user/user.repository';
import { v4 } from 'uuid';
import { RoleRepository } from '../../repository/role/role.repository';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../common/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
  ) {}

  async findOne(name: string): Promise<UserEntity> {
    return this.userRepository.findOne({ name }, { relations: ['role'] });
  }

  async checkUsername(name: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ name });
  }

  async registration(createUserDto: CreateUserDto) {
    const role = await this.roleRepository.findOne({ where: { role: 'user' } });
    const newUser = {
      ...createUserDto,
      pass: await bcrypt.hash(createUserDto.pass, 12),
      roles: [{ role: role.role }],
      confirm: true,
      confirmKey: v4(),
    };
    return this.userRepository.save(newUser);
  }

  async getUser(id: number) {
    return this.userRepository.findOne(id, { relations: ['roles'] });
  }
}
