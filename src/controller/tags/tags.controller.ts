import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AddingTagsDto, CreateTagsDto } from "../../common/model/tags/tags.dto";
import { TagsService } from '../../service/tags/tags.service';
import { Roles } from '../../common/decorators/roles-auth.decorator';
import { JwtAuthGuard } from '../../common/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/auth/guards/roles.guard';
import { AuthenticatedGuard } from '../../common/auth/guards/authenticated.guard';
import { addingRoleDto } from '../../common/model/role/request.dto';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private tagService: TagsService) {}

  @ApiOperation({ summary: 'Create tag' })
  @ApiResponse({ status: 201, description: 'Create success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Something wrong' })
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Post('/add')
  create(@Body() createTagsDto: CreateTagsDto) {
    return this.tagService.create(createTagsDto);
  }

  @Patch('/adding')
  async addingTags(@Body() addingTagsDto: AddingTagsDto) {
    return this.tagService.addingTags(addingTagsDto);
  }

  @ApiOperation({ summary: 'Delete tag' })
  @ApiResponse({ status: 201, description: 'Delete success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'Something wrong' })
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}
