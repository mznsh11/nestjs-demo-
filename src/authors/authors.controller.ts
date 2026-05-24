import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all authors' })
  @ApiResponse({ status: 200, description: 'List of authors' })
  findAll() {
    return { authors: this.authorsService.findAll() };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an author by ID' })
  @ApiResponse({ status: 200, description: 'The found author' })
  @ApiResponse({ status: 404, description: 'Author not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new author' })
  @ApiResponse({ status: 201, description: 'Author created' })
  create(@Body() author: CreateAuthorDto) {
    return this.authorsService.create(author);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an author by ID' })
  @ApiResponse({ status: 200, description: 'Author Updated' })
  @ApiResponse({ status: 404, description: 'Author not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() authorUpdate: UpdateAuthorDto,
  ) {
    return this.authorsService.update(id, authorUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an author by ID' })
  @ApiResponse({ status: 200, description: 'Author Deleted' })
  @ApiResponse({ status: 404, description: 'Author not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.delete(id);
  }
}
