import { uuid } from 'uuidv4';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategorieDTO from '@modules/categories/dtos/ICreateCategorieDTO';
import Categorie from '@modules/categories/infra/typeorm/entities/Categorie';

class FakeCategoriesRepository implements ICategoriesRepository {
  private users: Categorie[] = [];

  public async create(userData: ICreateCategorieDTO): Promise<Categorie> {
    const user = new Categorie();

    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);
    return user;
  }
}

export default FakeCategoriesRepository;
