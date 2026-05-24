import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGenreDto {
  @ApiPropertyOptional({ example: 'Fiction' })
  name?: string;
}