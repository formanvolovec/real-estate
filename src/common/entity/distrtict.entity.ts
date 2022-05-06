import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';
import { ApartmentEntity } from './apartment.entity';

@Entity('district')
export class DistrictEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  districtOfTheCity: string;

  @ManyToOne(() => CityEntity, (cityName: CityEntity) => cityName.id)
  cityName: CityEntity;

  @OneToMany(() => ApartmentEntity, (title: ApartmentEntity) => title.id)
  title: ApartmentEntity;
}
