import { Injectable, NotFoundException } from '@nestjs/common';
import { ApartmentRepository } from '../../repository/apartment/apartment.repository';
import { CreateApartmentDto } from '../../common/model/apartment/create.apartment.dto';
import { UpdateApartmentDto } from '../../common/model/apartment/update.apartment.dto';
import { TagsEntity } from '../../common/entity/tags.entity';
import { TagsRepository } from '../../repository/tags/tags.repository';

@Injectable()
export class ApartmentService {
  constructor(
    private apartmentRepository: ApartmentRepository,
    private tagsRepository: TagsRepository,
  ) {}
  async create(createApartmentDTO: CreateApartmentDto, photo) {
    const tags = await this.tagsRepository.findByIds(createApartmentDTO.tags);
    const apartment = await this.apartmentRepository.create({
      ...createApartmentDTO,
      photo,
      tags,
    });
    await this.apartmentRepository.save(apartment);
    return apartment;
  }

  async update(id: number, updateApartmentDTO: UpdateApartmentDto) {
    const find = await this.apartmentRepository.findOne(+id);
    const tags: TagsEntity[] = await this.tagsRepository.findByIds(
      updateApartmentDTO.tags,
    );
    if (!find) {
      throw new NotFoundException('No apartment found!');
    }
    return this.apartmentRepository.save({ ...updateApartmentDTO, id, tags });
  }

  async remove(id: number) {
    const find = await this.apartmentRepository.findOne(+id);
    if (!find) {
      throw new NotFoundException('No apartment found!');
    }
    return this.apartmentRepository.delete(+id);
  }

  async findOne(id: number) {
    const find = await this.apartmentRepository.findOne(+id);
    if (!find) {
      throw new NotFoundException('No apartment found');
    }
    return find;
  }
}
