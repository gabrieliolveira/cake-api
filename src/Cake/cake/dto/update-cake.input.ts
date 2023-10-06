import { CreateCakeInput } from './create-cake.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCakeInput extends PartialType(CreateCakeInput) {
  @Field(() => Int)
  id: number;
}
