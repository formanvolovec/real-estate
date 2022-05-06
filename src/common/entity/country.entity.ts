import {
  Column,
  Entity,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { CityEntity } from './city.entity';

@Entity('country')
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  countryName: string;

  @OneToMany(() => CityEntity, (cityName) => cityName.id)
  cityName: CityEntity;
}
