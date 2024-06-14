import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MFoodstuffService } from './m-foodstuff.service';
import { CreateMFoodstuffDto } from './dto/create-m-foodstuff.dto';
import { UpdateMFoodstuffDto } from './dto/update-m-foodstuff.dto';

@Controller('m-foodstuff')
export class MFoodstuffController {
  constructor(private readonly mFoodstuffService: MFoodstuffService) {}

  @Post()
  create(@Body() createMFoodstuffDto: CreateMFoodstuffDto) {
    return this.mFoodstuffService.create(createMFoodstuffDto);
  }

  @Get()
  findAll() {
    return this.mFoodstuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mFoodstuffService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMFoodstuffDto: UpdateMFoodstuffDto,
  ) {
    return this.mFoodstuffService.update(+id, updateMFoodstuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mFoodstuffService.remove(+id);
  }
}
