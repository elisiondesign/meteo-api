import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MeteoStation } from 'src/entities/meteo-station.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeteoStationService {
    
    constructor(
        @InjectRepository(MeteoStation)
        private readonly stationRepository: Repository<MeteoStation>,
    ) { }

   async findAll(): Promise<MeteoStation[]> {
        return await this.stationRepository.find();
    }

}


