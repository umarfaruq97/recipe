import { Test, TestingModule } from '@nestjs/testing';
import { MFoodstuffController } from './m-foodstuff.controller';
import { MFoodstuffService } from './m-foodstuff.service';

describe('MFoodstuffController', () => {
  let controller: MFoodstuffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MFoodstuffController],
      providers: [MFoodstuffService],
    }).compile();

    controller = module.get<MFoodstuffController>(MFoodstuffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
