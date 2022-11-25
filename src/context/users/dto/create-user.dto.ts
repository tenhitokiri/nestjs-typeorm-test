import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { UserDto } from './user.dto';
export class CreateUserDto implements Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'> {
    @ApiProperty()
    @IsNotEmpty()
    @Length(2, 200)
    firstName: string;

    @IsNotEmpty()
    @Length(2, 200)
    @ApiProperty()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    fireBaseId?: string;

    @ApiProperty()
    enabled: boolean;

    @ApiProperty()
    validated: boolean;

    @ApiProperty()
    BackOfficeAccess: boolean;

    @ApiProperty()
    SaasAccess: boolean;
}

//export type CreateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>;
