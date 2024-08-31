import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../Entity/user.entity';
import { ClientService } from '@monorepo/db'

@Resolver(_ => User)
export class UserResolver {
    constructor(private client: ClientService) {}

    @Query(_ => User)
    async user(@Args('id', { type: () => String }) id: string) {
        return await this.client.getClient().user.findUnique({
            where: {
                id: id
            }
        })
    }

    @Query(_ => [User]) 
    async users() {
        return await this.client.getClient().user.findMany()
    }

    @ResolveField()
    async id(@Parent() user: User) {
        return user.id
    }

    @ResolveField()
    async username(@Parent() user: User) {
        return user.username
    }
    
    @ResolveField()
    async calls(@Parent() user: User) {
        return await this.client.getClient().call.findMany({
            where: {
                users: {
                    some: {
                        id: user.id
                    }
                }
            }
        })
    }

    @ResolveField()
    async messages(@Parent() user: User) {
        return await this.client.getClient().message.findMany({
            where: {
                senderId: user.id
            }
        })
    }
}
