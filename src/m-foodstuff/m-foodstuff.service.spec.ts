import { Test, TestingModule } from '@nestjs/testing';
import { MFoodstuffService } from './m-foodstuff.service';

describe('MFoodstuffService', () => {
  let service: MFoodstuffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MFoodstuffService],
    }).compile();

    service = module.get<MFoodstuffService>(MFoodstuffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
