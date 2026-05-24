import { Controller, Get, Param, Post, Body, Delete, Patch, Query, ParseIntPipe} from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // TODO: Implement book controller methods
  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({ status: 200, description: 'List of books' })
  @ApiQuery({ name: 'includeAuthor', required: false, type: Boolean, description: 'Include author details in the response' })
  findAll(@Query('includeAuthor') includeAuthor: string) {
    return this.booksService.findAll( includeAuthor === 'true');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiResponse({ status: 200, description: 'The found book' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({ status: 201, description: 'Book Created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  create(@Body() book: CreateBookDto) {
    return this.booksService.create(book);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiResponse({ status: 200, description: 'Book Updated' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() bookUpdate: UpdateBookDto,
  ) {
    return this.booksService.update(id, bookUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiResponse({ status: 200, description: 'Book Deleted' })
  @ApiResponse({ status: 404, description: 'Book not found' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.delete(id);
  }
}
