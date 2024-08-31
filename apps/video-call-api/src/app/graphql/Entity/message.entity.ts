import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";
import { Call } from "./call.entity";

@ObjectType()
export class Message {
    @Field()
    id: string

    @Field()
    content: string

    @Field()
    sentAt: Date

    @Field(type => User)
    sender: User

    @Field(type => Call)
    call: Call
}