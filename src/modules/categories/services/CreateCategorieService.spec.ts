import FakeCategoriesRepository from '../repositories/fakes/FakeCategoriesRepository';
import CreateProfessionService from './CreateCategorieService';

let fakeCategoriesRepository: FakeCategoriesRepository;
let createUser: CreateProfessionService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    createUser = new CreateProfessionService(fakeCategoriesRepository);
  });

  it('should be able to create a new profession', async () => {
    const user = await createUser.execute({
      name: 'Teste',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Teste');
  });
});
