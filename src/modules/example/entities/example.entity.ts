import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../enums/categories.enum';

@Entity('examples')
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @Column({ type: 'varchar', nullable: true, length: 150 })
  category: Category;

  @Column({ type: 'simple-array' })
  tags: string[];
}
