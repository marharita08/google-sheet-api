import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SheetRow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  columns: Record<string, string>;
}
