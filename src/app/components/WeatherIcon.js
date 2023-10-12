"use-client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleExclamation,
    faCloud,
    faSmog,
    faSun,
    faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({weatherType}) => {
    switch(weatherType){
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} color={"grey"}/>;
        case "Rain":
        case "Drizzle":
            return <FontAwesomeIcon icon={faCloudRain} color={"grey"}/>;
        case "Clear":
            return <FontAwesomeIcon icon={faSun} color={"orange"}/>;
        case "Mist":
        case "Haze":
            return <FontAwesomeIcon icon={faSmog} color={"lightskyblue"}/>;
        default:
            return <FontAwesomeIcon icon={faCircleExclamation}/>;

    }
    return <div></div>
};

export default WeatherIcon;