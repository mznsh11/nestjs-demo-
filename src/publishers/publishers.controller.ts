import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishersService.findOne(+id);
  }

  @Post()
  create(@Body() publisher: { name: string }) {
    return this.publishersService.create(publisher);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() publisherUpdate: { name?: string },
  ) {
    return this.publishersService.update(+id, publisherUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.publishersService.delete(+id);
  }
}
