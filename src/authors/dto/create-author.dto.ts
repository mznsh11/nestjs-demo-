import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Jane Austen' })
  name: string;

  @ApiProperty({ example: 'jane.austen@example.com' })
  email: string;
}