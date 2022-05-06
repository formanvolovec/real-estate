import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ApartmentEntity } from './apartment.entity';

@Entity({ name: 'tags' })
export class TagsEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @ApiProperty()
  @Column()
  tag: string;

  @ApiProperty({ type: () => ApartmentEntity })
  @ManyToOne(() => ApartmentEntity, (realEstate) => realEstate, {
    nullable: true,
  })
  realEstate: ApartmentEntity[];
}
