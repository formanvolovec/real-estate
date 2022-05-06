import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CountryEntity } from './country.entity';
import { DistrictEntity } from './distrtict.entity';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  cityName: string;

  @OneToMany(() => DistrictEntity, (districtOfTheCity) => districtOfTheCity.id)
  districtOfTheCity: DistrictEntity;

  @ManyToOne(() => CountryEntity, (countryName) => countryName.id)
  @JoinTable()
  countryName: CountryEntity;
}