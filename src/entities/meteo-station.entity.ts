import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("meteo_stations")
export class MeteoStation {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column()
    technology: String;

    @Column()
    lat: Number;

    @Column()
    lng: Number;    
}