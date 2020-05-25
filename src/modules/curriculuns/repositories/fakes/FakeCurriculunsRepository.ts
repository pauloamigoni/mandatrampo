import { uuid } from 'uuidv4';

import Curriculum from '@modules/curriculuns/infra/typeorm/entities/Curriculum';

import ICurriculunsRepository from '@modules/curriculuns/repositories/ICurriculunsRepository';
import ICreateCurriculumDTO from '@modules/curriculuns/dtos/ICreateCurriculumDTO';

class FakeCurriculunsRepository implements ICurriculunsRepository {
  private appointments: Curriculum[] = [];

  public async create({
    user_id,
    curriculum,
    description,
    experience_time,
    link_mediasocial,
    profession_id,
    profession_others,
  }: ICreateCurriculumDTO): Promise<Curriculum> {
    const appointment = new Curriculum();

    Object.assign(appointment, {
      id: uuid(),
      user_id,
      curriculum,
      description,
      experience_time,
      link_mediasocial,
      profession_id,
      profession_others,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default FakeCurriculunsRepository;
