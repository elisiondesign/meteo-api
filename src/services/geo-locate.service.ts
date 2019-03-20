import { Injectable, HttpService } from '@nestjs/common';
import { Point } from '@/models/point.model';

@Injectable()
export class GeoLocateService {
    constructor(
        private readonly http: HttpService,
    ) { }

    async locateIp(ip: string): Promise<object> {
        const data =  await this.http.get(`http://ip-api.com/json/${ip}`).toPromise();
        return data.data;
    }

}
