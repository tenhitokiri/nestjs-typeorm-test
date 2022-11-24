import { UserDto } from './user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(UserDto) {
    @ApiProperty()
    id?: number;

    @ApiProperty()
    firstName?: string;

    @ApiProperty()
    lastName?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    fireBaseId?: string;

    @ApiProperty()
    enabled?: boolean;

    @ApiProperty()
    validated?: boolean;

    @ApiProperty()
    BackOfficeAccess?: boolean;

    @ApiProperty()
    SaasAccess?: boolean;
}
