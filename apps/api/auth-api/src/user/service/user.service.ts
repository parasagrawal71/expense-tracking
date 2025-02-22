import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = new UserEntity();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findUser(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ id });
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity | null> {
    if (!id) {
      throw new BadRequestException('Id is required');
    }

    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOneBy({ id });
  }

  removeUser(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
