import { ApartmentRepository } from './apartment/apartment.repository';
import { CityRepository } from './city/city.repository';
import { CountryRepository } from './country/country.repository';
import { DistrictRepository } from './district/district.repository';
import { RoleRepository } from './role/role.repository';
import { TagsRepository } from './tags/tags.repository';
import { UserRepository } from './user/user.repository';

export const REPOSITORY = [
  ApartmentRepository,
  CityRepository,
  CountryRepository,
  DistrictRepository,
  RoleRepository,
  TagsRepository,
  UserRepository,
];
