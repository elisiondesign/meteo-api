import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity("meteo_stations")
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

}