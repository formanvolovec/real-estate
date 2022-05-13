import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateApartmentDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  phoneNumber: number;

  @ApiProperty()
  @IsNumber()
  generalArea: number;

  @ApiProperty()
  @IsNumber()
  kitchenArea: number;

  @ApiProperty()
  @IsNumber()
  livingArea: number;

  @ApiProperty()
  @IsNumber()
  floor: number;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  roomTotal: number;

  @ApiProperty()
  @IsNumber()
  yearOfConstruction: number;

  @ApiProperty()
  @IsString()
  appliances: string;

  @ApiProperty()
  @IsArray()
  tags: number[];
}
