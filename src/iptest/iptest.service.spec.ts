import { Test, TestingModule } from '@nestjs/testing';
import { IptestService } from './iptest.service';

describe('IptestService', () => {
  let service: IptestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IptestService],
    }).compile();

    service = module.get<IptestService>(IptestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
