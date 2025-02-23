import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ExpenseCategory } from '../constants/expense-category.enum';
import { CommentEntity } from 'src/comment/entity/comment.entity';

@Entity('expenses')
export class ExpenseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ExpenseCategory,
    default: ExpenseCategory.Other,
  })
  category: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  expenseDate: Date;

  @Column({ type: 'numeric' })
  userId: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => CommentEntity, (comment) => comment.expense, {
    onDelete: 'CASCADE',
  })
  comments: CommentEntity[];
}
