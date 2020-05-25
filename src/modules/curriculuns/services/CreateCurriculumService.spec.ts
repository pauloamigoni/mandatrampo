import FakeCurriculunsRepository from '../repositories/fakes/FakeCurriculunsRepository';
import CreateCurriculumService from './CreateCurriculumService';

let fakeUsersRepository: FakeCurriculunsRepository;
let createUser: CreateCurriculumService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeCurriculunsRepository();

    createUser = new CreateCurriculumService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      user_id: '44b875f7-adc9-472a-9f5f-ec90ff0272d0',
      curriculum: '123',
      link_mediasocial: 'face',
      description: 'venda de doce',
      profession_id: '44b875f7-adc9-472a-9f5f-ec90ff0272d0',
      profession_others: 'a',
      experience_time: '10',
    });

    expect(user).toHaveProperty('id');
    expect(user.curriculum).toBe('123');
    expect(user.description).toBe('venda de doce');
  });
});
