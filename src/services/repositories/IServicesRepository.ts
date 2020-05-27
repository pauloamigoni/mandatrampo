import Service from '../infra/typeorm/entities/Service';
import ICreateServiceDTO from '../dtos/ICreateServiceDTO';

export default interface IServicesRepository {
  create(data: ICreateServiceDTO): Promise<Service>;
}
