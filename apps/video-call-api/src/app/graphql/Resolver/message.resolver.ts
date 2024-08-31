import { ClientService } from '@monorepo/db';
import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Message } from '../Entity/message.entity';

@Resolver(_ => Message)
export class MessageResolver {
    constructor(private client: ClientService) {}

    @Query(_ => Message)
    async message(@Args('id', { type: () => String }) id: string) {
        return await this.client.getClient().message.findUnique({
            where: {
                id: id
            }
        })
    }

    @Query(_ => [Message]) 
    async messages(@Args('call', { type: () => String }) call: string) {
        return await this.client.getClient().message.findMany({
            where: {
                callId: call
            }
        })
    }

    @ResolveField()
    async id(@Parent() message: Message) {
        return message.id
    }

    @ResolveField()
    async content(@Parent() message: Message) {
        return message.content
    }

    @ResolveField()
    async sentAt(@Parent() message: Message) {
        return message.sentAt
    }

    @ResolveField()
    async sender(@Parent() message: Message) {
        return (await this.client.getClient().message.findUnique({
            where: {
                id: message.id
            },
            include: {
                sender: true
            }
        })).sender
    }

    @ResolveField()
    async call(@Parent() message: Message) {
        return (await this.client.getClient().message.findUnique({
            where: {
                id: message.id
            },
            include: {
                call: true
            }
        })).call
    }
}
