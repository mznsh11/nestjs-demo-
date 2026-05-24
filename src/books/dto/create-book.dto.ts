import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Book1' })
  title: string;

  @ApiProperty({ example: 1 })
  authorId: number;

  @ApiProperty({ example: 1 })
  publisherId: number;

  @ApiProperty({ example: [1, 2], type: [Number] })
  genreIds: number[];
}