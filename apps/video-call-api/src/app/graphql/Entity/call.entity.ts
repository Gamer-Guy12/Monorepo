import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";
import { Message } from "./message.entity";

@ObjectType()
export class Call {
    @Field()
    id: string

    @Field()
    over: boolean

    @Field(type => [User])
    users: User[]

    @Field(type => [Message])
    messages: Message[]
}