import { Controller, Get, Param, Post, Body, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { GenresService } from './genres.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: 200, description: 'List of genres' })
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a genre by ID' })
  @ApiResponse({ status: 200, description: 'The found genre' })
  @ApiResponse({ status: 404, description: 'Genre not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new genre' })
  @ApiResponse({ status: 201, description: 'Genre created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  create(@Body() genre: CreateGenreDto) {
    return this.genresService.create(genre);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a genre by ID' })
  @ApiResponse({ status: 200, description: 'Genre Updated' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'Genre not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() genreUpdate: UpdateGenreDto,
  ) {
    return this.genresService.update(id, genreUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a genre by ID' })
  @ApiResponse({ status: 200, description: 'Genre Deleted' })
  @ApiResponse({ status: 404, description: 'Genre not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.delete(id);
  }
}
