import { EntityRepository, Repository } from 'typeorm';
import { CityEntity } from '../../common/entity/city.entity';
import { CountryEntity } from "../../common/entity/country.entity";

@EntityRepository(CountryEntity)
export class CountryRepository extends Repository<CountryEntity> {}
