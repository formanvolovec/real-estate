import { EntityRepository, Repository } from 'typeorm';
import { ApartmentEntity } from '../../common/entity/apartment.entity';

@EntityRepository(ApartmentEntity)
export class ApartmentRepository extends Repository<ApartmentEntity> {
  addingTags = (apartmentId, tagsId) => {
    return this.createQueryBuilder()
      .insert()
      .into('apartment_tags_tags')
      .values([
        {
          apartmentId: apartmentId,
          tagsId: tagsId,
        },
      ])
      .execute();
  };
}
