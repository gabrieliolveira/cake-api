import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCakeInput {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  battle: string;
  @Field(() => String)
  topping: string;
}
