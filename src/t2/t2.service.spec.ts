import { Test, TestingModule } from '@nestjs/testing';
import { T2Service } from './t2.service';

describe('T2Service', () => {
  let service: T2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [T2Service],
    }).compile();

    service = module.get<T2Service>(T2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
