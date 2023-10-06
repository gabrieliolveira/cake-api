import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cake {
  @Field(() => Int, { description: 'Cakes' })
  id: number;
  batter: string;
  topping: string;
}
