//export class CreateUserDto { }

export class UserDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    enabled: boolean;
    fireBaseId?: string;
    validated: boolean;
    BackOfficeAccess: boolean;
    SaasAccess: boolean;
    //createdAt: Date;
    //updatedAt: Date;
}
