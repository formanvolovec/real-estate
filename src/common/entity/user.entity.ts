import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from './role.entity';

@Entity({ name: 'user' })
export class UserEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  surName: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  login: string;

  @ApiProperty()
  @Column()
  pass: string;

  @ApiProperty()
  @OneToMany(() => RoleEntity, (role) => role.id)
  @JoinTable()
  roles: RoleEntity[];

  @ApiProperty()
  @Column()
  confirm: boolean;

  @ApiProperty()
  @Column()
  confirmKey: string;
}
