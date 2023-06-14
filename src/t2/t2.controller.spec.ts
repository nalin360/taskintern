import { Test, TestingModule } from '@nestjs/testing';
import { T2Controller } from './t2.controller';

describe('T2Controller', () => {
  let controller: T2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [T2Controller],
    }).compile();

    controller = module.get<T2Controller>(T2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
