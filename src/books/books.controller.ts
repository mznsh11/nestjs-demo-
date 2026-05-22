import { Controller, Get, Param, Post, Body, Delete, Patch, Query} from '@nestjs/common';


import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // TODO: Implement book controller methods
  @Get()
  findAll(@Query('includeAuthor') includeAuthor: string) {
    return this.booksService.findAll( includeAuthor === 'true');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Post()
  create(@Body() book: { title: string; authorId: number; publisherId: number; genreIds: number[] }) {
    return this.booksService.create(book);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() bookUpdate: { title?: string; authorId?: number; publisherId?: number; genreIds?: number[] },
  ) {
    return this.booksService.update(+id, bookUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.booksService.delete(+id);
  }
}
