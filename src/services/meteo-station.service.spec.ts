import { Test, TestingModule } from '@nestjs/testing';
import { MeteoStationService } from './meteo-station.service';
import { EntityManager, Repository } from 'typeorm';
import { MeteoStation } from '@/entities/meteo-station.entity';

describe('MeteoStationService', () => {
  let service: MeteoStationService;
  let entity: EntityManager;
  let repository: Repository<MeteoStation>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeteoStationService,
        {
          provide: EntityManager,
          useValue: {}
        },
        {
          // Note: Better solution would be to extend Repository<MeteoStation> in custom class MeteoStationRepository
          provide: 'MeteoStationRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    entity = module.get<EntityManager>(EntityManager);
    service = module.get<MeteoStationService>(MeteoStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
