import { uuid } from 'uuidv4';

import IProfessionsRepository from '@modules/professions/repositories/IProfessionsRepository';
import ICreateProfessionrDTO from '@modules/professions/dtos/ICreateProfessionrDTO';
import Profession from '@modules/professions/infra/typeorm/entities/Profession';

class FakeProfessionsRepository implements IProfessionsRepository {
  private users: Profession[] = [];

  public async create(userData: ICreateProfessionrDTO): Promise<Profession> {
    const user = new Profession();

    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);
    // console.log(user);
    return user;
  }
}

export default FakeProfessionsRepository;
