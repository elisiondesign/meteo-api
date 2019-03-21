import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeteoStation } from 'src/entities/meteo-station.entity';
import { Repository, EntityManager } from 'typeorm';

@Injectable()
export class MeteoStationService {

    constructor(
        @InjectRepository(MeteoStation)
        private readonly stationRepository: Repository<MeteoStation>,
        @Inject(EntityManager)
        private readonly em: EntityManager,
    ) { }

    async findAll(): Promise<MeteoStation[]> {
        return await this.stationRepository.find();
    }
    async findNearest(): Promise<MeteoStation[]> {
        return await this.stationRepository.findByIds([1]);
    }
    async rawQuery(): Promise<MeteoStation[]> {
        return await this.em.query('select * from meteo_stations where ST_Distance_Sphere(location,ST_SRID(POINT(50.0000,14.35000),4326)) < 10000;') as MeteoStation[];

    }

}


