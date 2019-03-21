import { SortOrder } from '@/enums/sort-order.enumerable';

export default interface MeteoStationsFilter {
    airTemperature: SortOrder,
    distance: SortOrder,
    humidity: SortOrder,
    roadTemperature: SortOrder,
    windSpeed: SortOrder,
}