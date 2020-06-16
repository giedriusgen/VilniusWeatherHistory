import React from "react";
import axios from "axios";
import serverUrl from "../URL/ServerUrl";
import CurrentWeatherComponent from "./CurrentWeatherComponent";

class CurrentWeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        };
    }


    saveDailyWeather = () => {

        let todayDate = new Date(new Date().setDate(new Date().getDate()));
        let today = todayDate.toISOString().slice(0, 10);

        todayDate.setHours(todayDate.getHours() - 1);
        let minusOneHour = todayDate.toISOString().slice(0, 14);
        let endTime = minusOneHour + "20:00Z";

        axios
            .get("https://api.climacell.co/v3/weather/historical/climacell", {
                params: {
                    lat: 54.6872,
                    lon: 25.2797,
                    unit_system: "si",
                    timestep: "30",
                    start_time: today + "T00:20:00Z",
                    end_time: endTime,
                    fields: ["wind_speed", "temp"]
                },
                headers: {
                    "apikey": "8aY6VButfxh1Rjx2bUfifgV6OUiBl3WR"
                }
            })
            .then(response => {
                this.saveWeather(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    saveWeather = (response) => {

        const weatherArray = response.map(weather => ({

            observationDate: weather.observation_time.value,
            observationTime: weather.observation_time.value,
            temp: weather.temp.value,
            windSpeed: weather.wind_speed.value,
            timestamp: weather.observation_time.value
        }))
        axios
            .post(serverUrl + "api/weather/day", weatherArray)
            .then(
                console.log('uploaded')
            )
            .catch(error => {

                console.log(error);
            });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
        }, 1000 * 60 * 60);
    }


    render() {
        return (
            <CurrentWeatherComponent />
        );
    }
}

export default CurrentWeatherContainer;


