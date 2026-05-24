import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAuthorDto {
  @ApiPropertyOptional({ example: 'Jane Austen' })
  name?: string;

  @ApiPropertyOptional({ example: 'jane.austen@example.com' })
  email?: string;
}