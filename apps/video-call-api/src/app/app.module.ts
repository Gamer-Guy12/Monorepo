import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DateScalar } from './graphql/Scalar/date.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true
    })
  ],
  controllers: [AppController],
  providers: [DateScalar]
})
export class AppModule {}
