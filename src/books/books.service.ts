import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorsService } from '../authors/authors.service';


@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: 'Book1',
      authorId: 1,
      publisherId: 1,
      genreIds: [1, 2]
    },
    {
      id: 2,
      title: 'Book2',
      authorId: 2,
      publisherId: 2,
      genreIds: [2, 3]
    },
    {
      id: 3,
      title: 'Book3',
      authorId: 3,
      publisherId: 3,
      genreIds: [1, 4]
    }  
  ];

  constructor(private readonly authorsService: AuthorsService) {}

  findAll(includeAuthor: boolean = false) {
    if (!includeAuthor) {
      return this.books;
    }
    return this.books.map((book) => {
      const { authorId, ...rest } = book;
      return {...rest, author: this.authorsService.findOne(authorId) };
    });
  
  }

  findOne(id: number) {
    const book= this.books.find(book => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  create(book: { title: string; authorId: number; publisherId: number; genreIds: number[] }) {
    const newBook = {
      id: 
        this.books.length > 0 ? this.books[this.books.length - 1].id + 1 : 1,
      ...book,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, book: { title?: string; authorId?: number; publisherId?: number; genreIds?: number[] }) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...book,
    };
    return this.books[bookIndex];
  }

  delete(id: number) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
    return { message: `Book with id ${id} deleted successfully` };
  }
}
