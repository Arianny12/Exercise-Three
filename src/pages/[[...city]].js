import WeatherCard from "@/app/components/WeatherCard";
import Header from "../app/components/Header"
import "../app/globals.css";
import styles from "@/app/components/WeatherCard.module.css"


export async function getStaticProps({params}){
    const city = (params && params.city) || 'Boston';
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();
    return{
        props: {
            weatherData,
        },
    };
};
export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export default function Home({ weatherData }){
   if (!weatherData) return null;
return(
    <>
        <Header/>
        <mian>
            <h1 className={styles.title}>Weather</h1>
            <WeatherCard
            cityName= {weatherData.name} 
            weatherType= {weatherData.weather[0].main}
            currentTemperature = {weatherData.main.temp}
            highTemperature = {weatherData.main.temp_max}
            lowTemperature = {weatherData.main.temp_min}
            cloudiness = {weatherData.clouds.all}
            humidity= {weatherData.main.humidity}
            windSpeed = {weatherData.wind.speed}
            
            />
        </mian>
    </>
);
}