import { Test, TestingModule } from '@nestjs/testing';
import { GeoLocateService } from './geo-locate.service';
import { HttpService } from '@nestjs/common';
import { CacheService } from './cache.service';

describe('GeoLocateService', () => {
  let http: HttpService;
  let service: GeoLocateService;
  let cache: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GeoLocateService,
        {
          provide: HttpService,
          useValue: {},
        },
        {
          provide: CacheService,
          useValue: {},
        },
      ],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<GeoLocateService>(GeoLocateService);
    
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return ip location', () => {
    // cache = jest.spyOn(cache, "get")
    // .mockReturnValueOnce(null)
    // .mockReturnValue(Promise.resolve({ lat: 50, lng: 14.49 }) as Promise<Coordinates>);
  })
});
