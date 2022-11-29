import { dbConfig } from './../../shared/infrastructure/persistance/postgreSQL/PostgresDataSource';
import { User } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User, dbConfig.name)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async findOne(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const userToUpdate = await this.userRepository.findOneBy({ id });
        if (!userToUpdate) throw new NotFoundException('User not Found');

        userToUpdate.firstName = updateUserDto.firstName;
        userToUpdate.lastName = updateUserDto.lastName;
        userToUpdate.email = updateUserDto.email;
        userToUpdate.enabled = updateUserDto.enabled;

        return await userToUpdate.save();
    }

    async remove(id: number) {
        const userToUpdate = await this.userRepository.findOneBy({ id });
        if (!userToUpdate) throw new NotFoundException('User not Found');

        userToUpdate.enabled = false;

        return await userToUpdate.save();
    }
}
