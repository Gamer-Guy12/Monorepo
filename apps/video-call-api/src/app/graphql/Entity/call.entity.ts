import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Call {
    @Field()
    id: string
}