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
    /**
     * Find all available meteo stations.
     * @returns Array of meteo stations.
     */
    async findAll(): Promise<MeteoStation[]> {
        return await this.stationRepository.find();
    }

    /**
     * Returns nearest meteo stations and its values.
     * @param geoLocation Coordinates point from which we measure radius
     * @param radius Radius in meters in which to look for stations
     * @param sort Sort result according to a field. usage: {field_name: <asc|desc>}
     */
    async findNearest(geoLocation: Coordinates, radius: number = 1000, sort: { distance: "asc" },
    ): Promise<MeteoStation[]> {
        const result = await this.em.query(
            `select *, ST_Distance_Sphere(location,ST_SRID(POINT(?,?),4326)) as distance from meteo_stations having distance  < ?;`,
            [geoLocation.lat, geoLocation.lng, radius]
        ) as MeteoStation[];        
        return orderBy(result, Object.keys(sort), Object.values(sort));
    }
}
