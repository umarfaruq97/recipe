import { Module } from '@nestjs/common';
import { MFoodstuffService } from './m-foodstuff.service';
import { MFoodstuffController } from './m-foodstuff.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MFoodstuffController],
  providers: [MFoodstuffService],
})
export class MFoodstuffModule {}
