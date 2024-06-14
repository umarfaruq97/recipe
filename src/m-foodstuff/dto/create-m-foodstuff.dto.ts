import { IsOptional, IsString } from 'class-validator';

export class CreateMFoodstuffDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
