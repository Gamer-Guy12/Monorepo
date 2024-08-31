import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DateScalar } from './graphql/Scalar/date.scalar';
import { UserResolver } from './graphql/Resolver/user.resolver';
import { DbModule } from '@monorepo/db';
import { join } from 'path';
import { MessageResolver } from './graphql/Resolver/message.resolver';
import { CallResolver } from './graphql/Resolver/call.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), './schema.graphql'),
    }),
    DbModule,
  ],
  providers: [DateScalar, UserResolver, MessageResolver, CallResolver],
})
export class AppModule {}
