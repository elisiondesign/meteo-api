import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { MeteoStation } from '@/entities/meteo-station.entity';
import { Coordinates } from '@/interfaces/coordinates.interface';
import { orderBy } from 'lodash';

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

    async findNearest(geoLocation: Coordinates, radius: number = 1000, sort: { distance: "asc" },
    ): Promise<MeteoStation[]> {
        const result = await this.em.query(
            `select *, ST_Distance_Sphere(location,ST_SRID(POINT(?,?),4326)) as distance from meteo_data having distance  < ?;`,
            [geoLocation.lat, geoLocation.lng, radius]
        ) as MeteoStation[];
        console.log(Object.keys(sort)[0], sort[0]);
        return orderBy(result, Object.keys(sort), Object.values(sort));
    }
}
