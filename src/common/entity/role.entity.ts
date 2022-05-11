import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Entity({ name: 'role' })
export class RoleEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  role: string;

  @ApiProperty()
  @OneToMany(() => UserEntity, (user) => user.role)
  users: UserEntity[];
}
