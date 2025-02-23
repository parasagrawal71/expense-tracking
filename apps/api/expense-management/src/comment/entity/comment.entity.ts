import { ExpenseEntity } from 'src/expense/entity/expense.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'numeric' })
  userId: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({ type: 'numeric' })
  expenseId: string;

  @ManyToOne(() => ExpenseEntity, (expense) => expense.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'expenseId' })
  expense: ExpenseEntity;
}
