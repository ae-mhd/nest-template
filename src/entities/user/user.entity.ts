import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatarUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  // checkPassword(password: string) {
  //   return bcrypt.compareSync(password, this.password);
  // }
}
