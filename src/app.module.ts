import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CakeModule } from './Cake/cake/cake.module';
import { DatabaseModule } from './Cake/cake/database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    CakeModule,
    DatabaseModule,
  ],
})
export class AppModule {}
