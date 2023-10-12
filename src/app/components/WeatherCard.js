"use-client";
import styles from "./WeatherCard.module.css"
import WeatherIcon from "./WeatherIcon"
const WeatherCard = ({
    cityName,
    cloudiness,
    currentTemperature,
    highTemperature,
    humidity,
    lowTemperature,
    weatherType,
    windSpeed,

}) => 

<div className={styles.weatherCardWrapper}>
    <div className={styles.leftSide}>
        <h2 className={styles.cityName}>{cityName}</h2>
        <div className={styles.imgBox}>
            <div className= {styles.WeatherCardImage}> 
                <WeatherIcon weatherType = {weatherType}/>
            </div>
        </div>
    </div>
    <div className={styles.rightSide}>
        <p>Wather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemperature}</p>
        <p>High Temperature: {highTemperature}</p>
        <p>Low Temperature: {lowTemperature}</p>
        <p>Cloudiness: {cloudiness}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind Speed: {windSpeed}</p>
    </div>

</div>


export default WeatherCard;