import { Test, TestingModule } from '@nestjs/testing';
import { MeteoStationService } from './meteo-station.service';

describe('MeteoStationService', () => {
  let service: MeteoStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeteoStationService],
    }).compile();

    service = module.get<MeteoStationService>(MeteoStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
