import { EntityRepository, Repository } from 'typeorm';
import { DistrictEntity } from '../../common/entity/distrtict.entity';

@EntityRepository(DistrictEntity)
export class DistrictRepository extends Repository<DistrictEntity> {}
