import { Controller, Get } from '@nestjs/common';
import { MeteoStationService } from '../services/meteo-station.service';
import { stat } from 'fs';
import { MeteoStation } from 'src/entities/meteo-station.entity';

@Controller()
export class AppController {
  constructor(private readonly meteoService: MeteoStationService) {}

  @Get()
  async getHello(): Promise<MeteoStation[]> {
    const stations = await this.meteoService.findAll();
    return stations;
  }
  @Get("nearest")
  async getNearest(): Promise<MeteoStation[]>{
    return await this.meteoService.findNearest();
  }
  @Get("raw")
  async getRaw(): Promise<any>{
    return await this.meteoService.rawQuery();
  }
}
