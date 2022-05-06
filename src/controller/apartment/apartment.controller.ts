import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@ApiTags('apartment')
@Controller('apartment')
export class ApartmentController {
  constructor() {}
}
