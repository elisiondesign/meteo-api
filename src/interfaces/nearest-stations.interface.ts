import MeteoStationsFilter from "./meteo-stations-filter.interface";

export default interface NearestStations {
    lat: number,
    lng: number,
    radius: number,
    filter: MeteoStationsFilter,
};