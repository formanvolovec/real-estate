import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@ApiTags('district')
@Controller('district')
export class DistrictController {
  constructor() {}
}
