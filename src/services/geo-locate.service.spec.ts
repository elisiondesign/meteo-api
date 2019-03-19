import { Test, TestingModule } from '@nestjs/testing';
import { GeoLocateService } from './geo-locate.service';

describe('GeoLocateService', () => {
  let service: GeoLocateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoLocateService],
    }).compile();

    service = module.get<GeoLocateService>(GeoLocateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
