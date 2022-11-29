import { dbConfig } from './../../shared/infrastructure/persistance/postgreSQL/PostgresDataSource';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User], dbConfig.name)],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
