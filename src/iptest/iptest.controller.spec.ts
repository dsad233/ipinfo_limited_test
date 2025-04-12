import { Test, TestingModule } from '@nestjs/testing';
import { IptestController } from './iptest.controller';
import { IptestService } from './iptest.service';

describe('IptestController', () => {
  let controller: IptestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IptestController],
      providers: [IptestService],
    }).compile();

    controller = module.get<IptestController>(IptestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
