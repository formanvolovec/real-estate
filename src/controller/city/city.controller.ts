import { ApiTags } from "@nestjs/swagger";
import { Controller } from "@nestjs/common";

@ApiTags('city')
@Controller('city')
export class CityController {
  constructor() {
  }
}
