import { Test, TestingModule } from '@nestjs/testing';
import { CarrosController } from './carros.controller';

describe('CarrosController', () => {
  let controller: CarrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrosController],
    }).compile();

    controller = module.get<CarrosController>(CarrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
