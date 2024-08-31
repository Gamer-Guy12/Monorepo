import { Test, TestingModule } from '@nestjs/testing';
import { CallResolver } from './call.resolver';

describe('CallResolver', () => {
  let resolver: CallResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallResolver],
    }).compile();

    resolver = module.get<CallResolver>(CallResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
