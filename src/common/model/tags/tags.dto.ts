import { ApiProperty } from '@nestjs/swagger';

export class CreateTagsDto {
  @ApiProperty()
  tag: string;
}
export class AddingTagsDto {
  @ApiProperty()
  apartmentId: number;

  @ApiProperty()
  tag: number;
}
