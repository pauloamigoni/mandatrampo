import { getRepository, Repository } from 'typeorm';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategorieDTO from '@modules/categories/dtos/ICreateCategorieDTO';
import Categorie from '../entities/Categorie';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Categorie>;

  constructor() {
    this.ormRepository = getRepository(Categorie);
  }

  public async create(userData: ICreateCategorieDTO): Promise<Categorie> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }
}

export default CategoriesRepository;
