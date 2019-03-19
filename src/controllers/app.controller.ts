import { Controller, Get, Req } from '@nestjs/common';
import { MeteoStationService } from '../services/meteo-station.service';
import { MeteoStation } from 'src/entities/meteo-station.entity';

@Controller()
export class AppController {
  constructor(private readonly meteoService: MeteoStationService) {}

  @Get()
  async getHello(@Req() request): Promise<MeteoStation[]> {
    const stations = await this.meteoService.findAll();    
    return stations;
  }
  @Get("nearest")
  async getNearest(): Promise<MeteoStation[]>{
    return await this.meteoService.findNearest();
  }
  @Get("raw")
  async getRaw(): Promise<MeteoStation[]>{
    return await this.meteoService.rawQuery();
  }
}
