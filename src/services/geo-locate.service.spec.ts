import { Test, TestingModule } from '@nestjs/testing';
import { GeoLocateService } from './geo-locate.service';
import { HttpService } from '@nestjs/common';

describe('GeoLocateService', () => {
  let http: HttpService;
  let service: GeoLocateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GeoLocateService,
        { provide: HttpService,
          useValue: {},
        }
      ],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<GeoLocateService>(GeoLocateService);
  });

  it('should be defined', () => {    
    expect(service).toBeDefined();
  });
});
