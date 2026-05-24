import { Controller, Get, Param, Post, Body, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';

@ApiTags('publishers')
@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all publishers' })
  @ApiResponse({ status: 200, description: 'List of publishers' })
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a publisher by ID' })
  @ApiResponse({ status: 200, description: 'The found publisher' })
  @ApiResponse({ status: 404, description: 'Publisher not found' })
  @ApiResponse({ status: 400, description: 'Invalid ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new publisher' })
  @ApiResponse({ status: 201, description: 'Publisher created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 409, description: 'Publisher already exists' })
  create(@Body() publisher: CreatePublisherDto) {
    return this.publishersService.create(publisher);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a publisher by ID' })
  @ApiResponse({ status: 200, description: 'Publisher Updated' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'Publisher not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() publisherUpdate: UpdatePublisherDto,
  ) {
    return this.publishersService.update(id, publisherUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a publisher by ID' })
  @ApiResponse({ status: 200, description: 'Publisher Deleted' })
  @ApiResponse({ status: 400, description: 'Invalid ID' })
  @ApiResponse({ status: 404, description: 'Publisher not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.delete(id);
  }
}
