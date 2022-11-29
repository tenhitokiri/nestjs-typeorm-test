import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column('text', { unique: true })
    email: string;

    @Column({ default: true })
    enabled: boolean;

    @Column({ nullable: true })
    fireBaseId?: string;

    @Column({ default: false })
    validated: boolean;

    @Column({ default: false })
    BackOfficeAccess: boolean;

    @Column({ default: false })
    SaasAccess: boolean;
}
