import { Injectable } from '@nestjs/common';
import { CityRepository } from '../../repository/city/city.repository';

@Injectable()
export class CityService {
  constructor(private cityRepository: CityRepository) {}
}
