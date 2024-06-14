import { PartialType } from '@nestjs/swagger';
import { CreateMFoodstuffDto } from './create-m-foodstuff.dto';

export class UpdateMFoodstuffDto extends PartialType(CreateMFoodstuffDto) {}
