import { Injectable } from '@nestjs/common';
import { CountryRepository } from '../../repository/country/country.repository';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}
}
