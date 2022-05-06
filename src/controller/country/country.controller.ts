import { ApiTags } from "@nestjs/swagger";
import { Controller } from "@nestjs/common";

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor() {
  }
}
