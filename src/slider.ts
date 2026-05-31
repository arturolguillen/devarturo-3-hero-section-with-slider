import UltraLuxuryExoticDestinationBaliTropicalJungleResortWithInfinityPool from "./assets/ultra_luxury_exotic_destination_bali_tropical_jungle_resort_with_infinity_pool.png";
import DramaticIcelandLandscapeWithBlackSandBeachAndCrashingWavesMoody from "./assets/dramatic_iceland_landscape_with_black_sand_beach_and_crashing_waves_moody.png";
import LuxurySafariLodgeInTheSerengetiAtDawnWildAnimalsInTheDistanceWarm from "./assets/luxury_safari_lodge_in_the_serengeti_at_dawn_wild_animals_in_the_distance_warm.png";
import OverwaterBungalowInTheMaldivesWithCrystalClearTurquoiseWaterBright from "./assets/overwater_bungalow_in_the_maldives_with_crystal_clear_turquoise_water_bright.png"

export type SliderItem = {
    location: string;
    place: string;
    image: string;
};

const items: SliderItem[] = [
    {
        location: 'Indonesia',
        place: 'Bali',
        image: UltraLuxuryExoticDestinationBaliTropicalJungleResortWithInfinityPool.src
    },
    {
        location: 'Norte de Europa',
        place: 'Islandia',
        image: DramaticIcelandLandscapeWithBlackSandBeachAndCrashingWavesMoody.src
    },
    {
        location: 'Tanzania',
        place: 'Serengueti',
        image: LuxurySafariLodgeInTheSerengetiAtDawnWildAnimalsInTheDistanceWarm.src
    },
    {
        location: 'Océano Índico',
        place: 'Maldivas',
        image: OverwaterBungalowInTheMaldivesWithCrystalClearTurquoiseWaterBright.src
    },
];

export default items;