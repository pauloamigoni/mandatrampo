import FakeServicesRepository from '../repositories/fakes/FakeServicesRepository';
import CreateServiceService from './CreateServiceService';

let fakeServicesRepository: FakeServicesRepository;
let createService: CreateServiceService;

describe('CreateService', () => {
  beforeEach(() => {
    fakeServicesRepository = new FakeServicesRepository();

    createService = new CreateServiceService(fakeServicesRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createService.execute({
      user_id: '44b875f7-adc9-472a-9f5f-ec90ff0272d0',
      name: 'nome',
      description: 'descricao',
      address: 'endereco',
      city: 'limeira',
      phone: '3232',
      celphone: '3232',
      email: '213',
      site: '312321',
      link_facebook: '32131',
      link_instagram: '13112',
      opening_hours: '32131',
      categories_id: '44b875f7-adc9-472a-9f5f-ec90ff0272d0',
      categories_others: '44b875f7-adc9-472a-9f5f-ec90ff0272d0',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('nome');
  });
});
