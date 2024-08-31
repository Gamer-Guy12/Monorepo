import { Test, TestingModule } from '@nestjs/testing';
import { CallResolver } from './call.resolver';
import { DbModule } from '@monorepo/db';

describe('CallResolver', () => {
  let resolver: CallResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallResolver],
      imports: [DbModule]
    }).compile();

    resolver = module.get<CallResolver>(CallResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
