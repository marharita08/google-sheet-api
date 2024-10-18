import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class SheetRow {
  @PrimaryColumn()
  @ApiProperty({ type: 'number', description: 'Unique identifier for the SheetRow' })
  id: number;

  @Column('json')
  @ApiProperty({ type: 'object', description: 'Columns of the sheet row in JSON format' })
  columns: Record<string, string>;
}
