import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn({ name: 'created_at', default: new Date() })
  @Exclude()
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', default: new Date() })
  @Exclude()
  updatedAt!: Date;
}
