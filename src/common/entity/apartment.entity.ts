import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TagsEntity } from './tags.entity';
import { UserEntity } from './user.entity';
import { DistrictEntity } from './distrtict.entity';

@Entity({ name: 'apartment' })
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  price: number;

  @Column('varchar')
  phoneNumber: number;

  @Column('varchar')
  generalArea: number;

  @Column('varchar')
  kitchenArea: number;

  @Column('varchar')
  livingArea: number;

  @Column('varchar')
  floor: number;

  @Column('varchar')
  address: string;

  @Column('varchar')
  roomTotal: number;

  @Column('varchar')
  yearOfConstruction: number;

  @Column('varchar')
  appliances: string;

  @Column('bytea', { nullable: true })
  photo: Uint8Array | string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @ManyToOne(() => DistrictEntity, (districtOfTheCity) => districtOfTheCity.id)
  districtOfTheCity: DistrictEntity;

  @ApiProperty({ type: [TagsEntity] })
  @OneToMany(() => TagsEntity, (tag) => tag.realEstate, { nullable: true })
  tags: TagsEntity[];

  @ApiProperty()
  @ManyToOne(() => UserEntity, (user) => user.id)
  owner: UserEntity;
}
