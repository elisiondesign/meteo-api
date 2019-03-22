import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Coordinates } from '@/interfaces/coordinates.interface';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
@Entity("meteo_data")
export class MeteoStation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    technology: string;

    @Column()
    lat: number;

    @Column()
    lng: number;

    location: Coordinates;

    @Column()
    airTemperature: number;

    @Column()
    alarm: boolean;

    @Column()
    devPoint: number;

    @Column()
    district: string;

    @Column()
    freezTemperature: number;

    @Column()
    gid: string;

    @Column()
    humidity: number;

    @Column()
    lastUpdated: Date;

    @Column()
    mark: string;

    @Column()
    prec: number;

    @Column()
    prectype: number;

    @Column()
    prefix: string;

    @Column()
    roadTemperature: number;

    @Column()
    roadWet: string;

    @Column()
    sgid: number;

    @Column()
    spray: string;

    @Column()
    sprayProgram: string;

    @Column()
    street: string;

    @Column()
    tankLevel: number;

    @Column()
    tmsAlarm: boolean;

    @Column()
    windSpeed: number;

    @Column()
    windDirection: number

}