import Curriculum from '../infra/typeorm/entities/Curriculum';
import ICreateCurriculumDTO from '../dtos/ICreateCurriculumDTO';

export default interface ICurriculunsRepository {
  create(data: ICreateCurriculumDTO): Promise<Curriculum>;
}
