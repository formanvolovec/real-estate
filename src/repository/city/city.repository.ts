import { EntityRepository, Repository } from 'typeorm';
import { CityEntity } from '../../common/entity/city.entity';

@EntityRepository(CityEntity)
export class CityRepository extends Repository<CityEntity> {}
