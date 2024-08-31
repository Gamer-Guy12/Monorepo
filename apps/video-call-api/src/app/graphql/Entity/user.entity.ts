import { Field, ObjectType } from "@nestjs/graphql";
import { Message } from "./message.entity";
import { Call } from "./call.entity";

@ObjectType()
export class User {
    @Field()
    id: string

    @Field()
    username: string

    @Field()
    password: string

    @Field(type => [Message])
    messages: Message[]

    @Field(type => [Call])
    calls: Call[]
}