import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

@Injectable()
export class ClientService {
    client: PrismaClient

    constructor() {
        this.client = new PrismaClient()
    }
    
    getClient() {
        return this.client
    }
}
