import { Injectable } from '@nestjs/common';
import { CreateMFoodstuffDto } from './dto/create-m-foodstuff.dto';
import { UpdateMFoodstuffDto } from './dto/update-m-foodstuff.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MFoodstuffService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMFoodstuffDto: CreateMFoodstuffDto) {
    return this.prisma.mFoodstuff.create({ data: createMFoodstuffDto });
  }

  findAll() {
    return this.prisma.mFoodstuff.findMany();
  }

  findOne(id: number) {
    return this.prisma.mFoodstuff.findUnique({ where: { id } });
  }

  update(id: number, updateMFoodstuffDto: UpdateMFoodstuffDto) {
    return this.prisma.mFoodstuff.update({
      where: { id },
      data: updateMFoodstuffDto,
    });
  }

  remove(id: number) {
    return this.prisma.mFoodstuff.delete({ where: { id } });
  }
}
