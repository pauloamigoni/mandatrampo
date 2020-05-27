import Categorie from '../infra/typeorm/entities/Categorie';
import ICreateCategorieDTO from '../dtos/ICreateCategorieDTO';

export default interface ICategoriesRepository {
  create(data: ICreateCategorieDTO): Promise<Categorie>;
}
