import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiPropertyOptional({ example: 'Book1' })
  title?: string;

  @ApiPropertyOptional({ example: 1 })
  authorId?: number;

  @ApiPropertyOptional({ example: 1 })
  publisherId?: number;

  @ApiPropertyOptional({ example: [1, 2], type: [Number] })
  genreIds?: number[];
}