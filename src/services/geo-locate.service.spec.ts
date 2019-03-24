import { Test, TestingModule } from '@nestjs/testing';
import { GeoLocateService } from './geo-locate.service';
import { HttpService, HttpException } from '@nestjs/common';
import { CacheService } from './cache.service';
import { of, Observable } from 'rxjs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';


class CacheServiceMock {
  get(key: string | number) { return ''; }

  set(key: string | number, value: any) { }

  delete(keys: string | number | []) { }

  flush() { }
}

class HttpServiceMock {
  request(config: AxiosRequestConfig) { };
  get(url: string, config?: AxiosRequestConfig) { };
  delete(url: string, config?: AxiosRequestConfig) { }
  head(url: string, config?: AxiosRequestConfig) { }
  post(url: string, data?: any, config?: AxiosRequestConfig) { }
  put(url: string, data?: any, config?: AxiosRequestConfig) { }
  patch(url: string, data?: any, config?: AxiosRequestConfig) { }
}

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
          useValue: new HttpServiceMock(),
        },
        {
          provide: CacheService,
          useValue: new CacheServiceMock(),
        },
      ],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<GeoLocateService>(GeoLocateService);
    cache = module.get<CacheService>(CacheService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return ip location', async () => {    
    const coordinates = { lat: 50, lng: 14.6666 };
    const response: AxiosResponse = { data: { lat: 50, lon: 14.6666 }, status: 200, statusText: '', headers: {}, config: {} };
    jest.spyOn(cache, 'get').mockImplementationOnce(() => null).mockImplementationOnce(() => coordinates);
    jest.spyOn(http, 'get').mockImplementation(() => of(response));

    const location = await service.getIpLocation('8.8.8.8');
    expect(location.lat).toBe(coordinates.lat);
    expect(location.lng).toBe(coordinates.lng);
 
  });

});
