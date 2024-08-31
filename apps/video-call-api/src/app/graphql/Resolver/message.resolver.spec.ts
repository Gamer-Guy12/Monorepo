import { Test, TestingModule } from '@nestjs/testing';
import { MessageResolver } from './message.resolver';
import { DbModule } from '@monorepo/db';

describe('MessageResolver', () => {
  let resolver: MessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageResolver],
      imports: [DbModule]
    }).compile();

    resolver = module.get<MessageResolver>(MessageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
