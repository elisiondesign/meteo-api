import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Coordinates } from '@/models/coordinates.model';
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

}