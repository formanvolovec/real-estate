import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateApartmentDto } from '../../common/model/apartment/create.apartment.dto';
import { ApartmentService } from '../../service/apartment/apartment.service';
import { UpdateApartmentDto } from '../../common/model/apartment/update.apartment.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('apartment')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @ApiOperation({ summary: 'Create apartment' })
  @ApiResponse({ status: 201, description: 'Create successful' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Something wrong' })
  @ApiBody({ type: CreateApartmentDto })
  @Post('/add')
  @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
  create(@UploadedFile() file, @Body() createApartmentDTO: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDTO, file);
  }

  @ApiOperation({ summary: 'Update apartment' })
  @ApiResponse({ status: 201, description: 'Update successful' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Something wrong' })
  @ApiParam({ name: 'id', required: true })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @ApiOperation({ summary: 'Delete apartment' })
  @ApiParam({ name: 'id', required: true })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }

  @ApiOperation({ summary: 'Search apartment by ID' })
  @ApiParam({ name: 'id', required: true })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }
}
