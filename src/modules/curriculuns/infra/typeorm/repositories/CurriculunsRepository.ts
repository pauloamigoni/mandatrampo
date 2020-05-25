import { getRepository, Repository } from 'typeorm';
import Curriculum from '@modules/curriculuns/infra/typeorm/entities/Curriculum';

import ICurriculunsRepository from '@modules/curriculuns/repositories/ICurriculunsRepository';
import ICreateCurriculumDTO from '@modules/curriculuns/dtos/ICreateCurriculumDTO';

class CurriculunsRepository implements ICurriculunsRepository {
  private ormRepository: Repository<Curriculum>;

  constructor() {
    this.ormRepository = getRepository(Curriculum);
  }

  public async create({
    user_id,
    curriculum,
    link_mediasocial,
    description,
    profession_id,
    profession_others,
    experience_time,
  }: ICreateCurriculumDTO): Promise<Curriculum> {
    const curri = this.ormRepository.create({
      user_id,
      curriculum,
      link_mediasocial,
      description,
      profession_id,
      profession_others,
      experience_time,
    });

    await this.ormRepository.save(curri);

    return curri;
  }
}

export default CurriculunsRepository;
