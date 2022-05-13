import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ApartmentEntity } from './apartment.entity';

@Entity({ name: 'tags' })
export class TagsEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  tag: string;

  @ApiProperty({ type: () => ApartmentEntity })
  @ManyToMany(() => ApartmentEntity, (apartment) => apartment, {
    nullable: true,
  })
  apartment: ApartmentEntity[];
}
