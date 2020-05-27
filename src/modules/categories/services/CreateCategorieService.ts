import { inject, injectable } from 'tsyringe';

import Categorie from '../infra/typeorm/entities/Categorie';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
}
@injectable()
class CreateCategorieService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Categorie> {
    const curri = await this.categoriesRepository.create({
      name,
    });

    return curri;
  }
}

export default CreateCategorieService;
