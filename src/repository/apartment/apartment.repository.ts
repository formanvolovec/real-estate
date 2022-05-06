import { EntityRepository, Repository } from 'typeorm';
import { ApartmentEntity } from '../../common/entity/apartment.entity';

@EntityRepository(ApartmentEntity)
export class ApartmentRepository extends Repository<ApartmentEntity> {}
