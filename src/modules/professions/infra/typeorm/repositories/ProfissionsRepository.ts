import { getRepository, Repository } from 'typeorm';

import IProfessionsRepository from '@modules/professions/repositories/IProfessionsRepository';
import ICreateProfessionrDTO from '@modules/professions/dtos/ICreateProfessionrDTO';
import Profession from '../entities/Profession';

class ProfessionsRepository implements IProfessionsRepository {
  private ormRepository: Repository<Profession>;

  constructor() {
    this.ormRepository = getRepository(Profession);
  }

  public async create(userData: ICreateProfessionrDTO): Promise<Profession> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }
}

export default ProfessionsRepository;
