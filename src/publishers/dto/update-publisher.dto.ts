import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePublisherDto {
  @ApiPropertyOptional({ example: 'Publisher One' })
  name?: string;
}