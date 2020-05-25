import { inject, injectable } from 'tsyringe';

import Curriculum from '../infra/typeorm/entities/Curriculum';
import ICurriculunsRepository from '../repositories/ICurriculunsRepository';

interface IRequest {
  user_id: string;
  curriculum: string;
  link_mediasocial: string;
  description: string;
  profession_id: string;
  profession_others: string;
  experience_time: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('CurriculunsRepository')
    private curriculunsRepository: ICurriculunsRepository,
  ) {}

  public async execute({
    user_id,
    curriculum,
    link_mediasocial,
    description,
    profession_id,
    profession_others,
    experience_time,
  }: IRequest): Promise<Curriculum> {
    const curri = await this.curriculunsRepository.create({
      user_id,
      curriculum,
      link_mediasocial,
      description,
      profession_id,
      profession_others,
      experience_time,
    });

    return curri;
  }
}

export default CreateUserService;
