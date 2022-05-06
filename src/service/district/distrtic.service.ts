import { Injectable } from '@nestjs/common';
import { DistrictRepository } from '../../repository/district/district.repository';

@Injectable()
export class DistrticService {
  constructor(private districtRepository: DistrictRepository) {}
}
