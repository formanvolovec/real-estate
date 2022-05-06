import { Injectable } from '@nestjs/common';
import { ApartmentRepository } from '../../repository/apartment/apartment.repository';

@Injectable()
export class ApartmentService {
  constructor(private apartmentRepository: ApartmentRepository) {}
}
