import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';
export class CreateUserDto implements Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'> {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
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
