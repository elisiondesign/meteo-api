import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { GeoLocateService } from '@/services/geo-locate.service';
import { MeteoStationService } from '@/services/meteo-station.service';

describe('AppController', () => {
  let appController: AppController;
  let geoService: GeoLocateService;
  let meteoService: MeteoStationService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: GeoLocateService,
          useValue: {},
        },
        {
          provide: MeteoStationService,
          useValue: {},
        },
      ],
    }).compile();
    geoService = app.get<GeoLocateService>(GeoLocateService);
    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

});
