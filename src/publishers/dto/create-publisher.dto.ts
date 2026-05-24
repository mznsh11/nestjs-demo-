import { ApiProperty } from '@nestjs/swagger';

export class CreatePublisherDto {
  @ApiProperty({ example: 'Publisher One' })
  name: string;
}