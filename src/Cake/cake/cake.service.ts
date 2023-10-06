import { Injectable } from '@nestjs/common';
import { CreateCakeInput } from './dto/create-cake.input';
import { UpdateCakeInput } from './dto/update-cake.input';
import { PrismaService } from './database/service/prisma.service';

@Injectable()
export class CakeService {
  constructor(private prismaService: PrismaService) {}
  async create(createCakeInput: CreateCakeInput) {
    return await this.prismaService.cakes.create({
      data: createCakeInput,
    });
  }

  async findAll() {
    return await this.prismaService.cakes.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.cakes.findFirst({
      where: { id: id },
    });
  }

  async update(id: number, updateCakeInput: UpdateCakeInput) {
    return await this.prismaService.cakes.update({
      data: updateCakeInput,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prismaService.cakes.delete({
      where: { id: id },
    });
  }
}
