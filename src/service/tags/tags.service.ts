import { Injectable, NotFoundException } from '@nestjs/common';
import { TagsRepository } from '../../repository/tags/tags.repository';
import { AddingTagsDto, CreateTagsDto } from '../../common/model/tags/tags.dto';
import { ApartmentRepository } from '../../repository/apartment/apartment.repository';

@Injectable()
export class TagsService {
  constructor(
    private tagsRepository: TagsRepository,
    private apartmentRepository: ApartmentRepository,
  ) {}
  async create(createTagsDto: CreateTagsDto) {
    const tag = await this.tagsRepository.create({
      ...createTagsDto,
    });
    return this.tagsRepository.save(tag);
  }

  async addingTags(addingTagsDto: AddingTagsDto) {
    const tag = await this.tagsRepository.findOne({
      where: { tag: addingTagsDto.tag },
    });
    await this.apartmentRepository.addingTags(
      addingTagsDto.apartmentId,
      addingTagsDto.tag,
    );
  }

  async remove(id: number) {
    const find = await this.tagsRepository.findOne(+id);
    if (!find) {
      throw new NotFoundException(`No tag found, to delete`);
    }
    return this.tagsRepository.delete(+id);
  }
}
