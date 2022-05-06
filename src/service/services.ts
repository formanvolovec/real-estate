import { ApartmentService } from './apartment/apartment.service';
import { CityService } from './city/city.service';
import { CountryService } from './country/country.service';
import { DistrticService } from './district/distrtic.service';
import { RoleService } from './role/role.service';
import { TagsService } from './tags/tags.service';
import { UserService } from './user/user.service';

export const SERVICES = [
  ApartmentService,
  CityService,
  CountryService,
  DistrticService,
  RoleService,
  TagsService,
  UserService,
];
