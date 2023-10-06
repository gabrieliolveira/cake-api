import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CakeService } from './cake.service';
import { Cake } from './entities/cake.entity';
import { CreateCakeInput } from './dto/create-cake.input';
import { UpdateCakeInput } from './dto/update-cake.input';

@Resolver(() => Cake)
export class CakeResolver {
  constructor(private readonly cakeService: CakeService) {}

  @Mutation(() => Cake)
  createCake(@Args('createCakeInput') createCakeInput: CreateCakeInput) {
    return this.cakeService.create(createCakeInput);
  }

  @Query(() => [Cake], { name: 'cake' })
  findAll() {
    return this.cakeService.findAll();
  }

  @Query(() => Cake, { name: 'cake' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cakeService.findOne(id);
  }

  @Mutation(() => Cake)
  updateCake(@Args('updateCakeInput') updateCakeInput: UpdateCakeInput) {
    return this.cakeService.update(updateCakeInput.id, updateCakeInput);
  }

  @Mutation(() => Cake)
  removeCake(@Args('id', { type: () => Int }) id: number) {
    return this.cakeService.remove(id);
  }
}
