import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { GeoLocateService } from '@/services/geo-locate.service';

describe('AppController', () => {
  let appController: AppController;
  let geoService: GeoLocateService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: GeoLocateService,
          useValue: {},
        }
      ],
    }).compile();
    geoService = app.get<GeoLocateService>(GeoLocateService);
    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

});
