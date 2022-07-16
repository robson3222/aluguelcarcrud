import { Test, TestingModule } from '@nestjs/testing';
import { CarroService } from './carro.service';

describe('CarroService', () => {
  let provider: CarroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarroService],
    }).compile();

    provider = module.get<CarroService>(CarroService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
