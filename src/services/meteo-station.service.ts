import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { MeteoStation } from '@/entities/meteo-station.entity';
import { Coordinates } from '@/models/coordinates.model';

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

    async findNearest(gpsLocation: Coordinates, radius: number): Promise<MeteoStation[]> {
        return await this.em.query(
            `select * from meteo_stations where ST_Distance_Sphere(location,ST_SRID(POINT(?,?),4326)) < ?;`,
            [gpsLocation.lat, gpsLocation.lng, radius]
        ) as MeteoStation[];
    }

}


