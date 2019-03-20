import { Injectable, HttpService } from '@nestjs/common';
import { Point } from '@/models/point.model';
import { map } from 'rxjs/operators';

@Injectable()
export class GeoLocateService {
    constructor(
        private readonly http: HttpService,
    ) { }

    async locateIp(ip: string): Promise<Point> {
        try {
            // TODO: ip-api returns 200 OK even on invalid requests.
            const data = await this.http.get(`http://ip-api.com/json/${ip}`).toPromise();
            console.log(data.data);
            const point = {
                x: data['data'].lon,
                y: data['data'].lat,
            };
            return point;
        }
        catch {
            throw new Error('IP location service request failed.');
        }
    }

}
