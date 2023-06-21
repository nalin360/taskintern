import { Test, TestingModule } from '@nestjs/testing';
import { MidwayController } from './midway.controller';

describe('MidwayController', () => {
  let controller: MidwayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MidwayController],
    }).compile();

    controller = module.get<MidwayController>(MidwayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
