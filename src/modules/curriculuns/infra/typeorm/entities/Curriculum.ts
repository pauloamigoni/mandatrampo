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

@Entity('curriculum')
class Curriculum {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  curriculum: string;

  @Column()
  link_mediasocial: string;

  @Column()
  description: string;

  @Column()
  profession_id: string;

  @ManyToOne(() => Profession)
  @JoinColumn({ name: 'profession_id' })
  profession: Profession;

  @Column()
  profession_others: string;

  @Column()
  experience_time: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Curriculum;
