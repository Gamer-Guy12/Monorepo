import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Call } from '../Entity/call.entity';
import { ClientService } from '@monorepo/db';

@Resolver(_ => Call)
export class CallResolver {
    constructor(private client: ClientService) {}

    @Query(_ => Call)
    async call(@Args('id', { type: () => String }) id: string) {
        return await this.client.getClient().call.findUnique({
            where: {
                id: id
            }
        })
    }

    @ResolveField()
    async id(@Parent() call: Call) {
        return call.id
    }

    @ResolveField()
    async over(@Parent() call: Call) {
        return call.over
    }

    @ResolveField()
    async users(@Parent() call: Call) {
        return (await this.client.getClient().user.findMany({
            where: {
                calls: {
                    some: {
                        id: call.id
                    }
                }
            }
        }))
    }

    @ResolveField()
    async messages(@Parent() call: Call) {
        return (await this.client.getClient().message.findMany({
            where: {
                callId: call.id
            }
        }))
    }
}
