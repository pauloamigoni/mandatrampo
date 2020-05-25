import Profession from '../infra/typeorm/entities/Profession';
import ICreateProfessionrDTO from '../dtos/ICreateProfessionrDTO';

export default interface IProfessionsRepository {
  create(data: ICreateProfessionrDTO): Promise<Profession>;
}
