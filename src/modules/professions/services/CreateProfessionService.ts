import { inject, injectable } from 'tsyringe';

import Profession from '../infra/typeorm/entities/Profession';
import IProfessionsRepository from '../repositories/IProfessionsRepository';

interface IRequest {
  name: string;
}
@injectable()
class CreateProfessionService {
  constructor(
    @inject('ProfissionsRepository')
    private professionsRepository: IProfessionsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Profession> {
    const curri = await this.professionsRepository.create({
      name,
    });

    return curri;
  }
}

export default CreateProfessionService;
