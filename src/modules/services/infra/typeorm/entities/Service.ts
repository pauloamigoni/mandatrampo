import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Profession from '@modules/professions/infra/typeorm/entities/Profession';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('services')
class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column()
  celphone: string;

  @Column()
  email: string;

  @Column()
  site: string;

  @Column()
  link_facebook: string;

  @Column()
  link_instagram: string;

  @Column()
  opening_hours: string;

  @Column()
  categories_id: string;

  @ManyToOne(() => Profession)
  @JoinColumn({ name: 'categories_id' })
  categories: Profession;

  @Column()
  categories_others: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Service;
