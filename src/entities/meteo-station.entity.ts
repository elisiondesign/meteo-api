import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Coordinates } from '@/interfaces/coordinates.interface';
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