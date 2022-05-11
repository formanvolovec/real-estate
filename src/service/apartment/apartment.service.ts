import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApartmentRepository } from '../../repository/apartment/apartment.repository';
import { CreateApartmentDto } from '../../common/model/apartment/create.apartment.dto';
import { UpdateApartmentDto } from '../../common/model/apartment/update.apartment.dto';

@Injectable()
export class ApartmentService {
  constructor(private apartmentRepository: ApartmentRepository) {}
  async create(createApartmentDTO: CreateApartmentDto, photo) {
    const apartment = await this.apartmentRepository.create({
      ...createApartmentDTO,
      photo,
    });
    return this.apartmentRepository.save(apartment);
  }

  async update(id: number, updateApartmentDTO: UpdateApartmentDto) {
    const find = await this.apartmentRepository.findOne(+id);
    if (!find) {
      throw new NotFoundException('No apartment found!');
    }
    return this.apartmentRepository.save({ ...updateApartmentDTO, id });
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
