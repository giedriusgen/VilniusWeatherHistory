import React from 'react';
import DataImportComponent from './DataImportComponent';
import axios from "axios";
import serverUrl from "../URL/ServerUrl";

class DataImportContainer extends React.Component {

    importWeather = (day) => {

        for (let i = 1; i < day + 1; i++) {
            let firstDate = new Date(new Date().setDate(new Date().getDate() - i));
            let secondDate = new Date(new Date().setDate(new Date().getDate() - i + 1));

            let firstDay = firstDate.toISOString().slice(0, 10);
            let secondDay = secondDate.toISOString().slice(0, 10);

            this.importWeatherData(firstDay, secondDay);
        }

        alert("Data successfully imported");

    }


    importWeatherData = (firstDay, secondDay) => {

        axios
            .get("https://api.climacell.co/v3/weather/historical/station", {
                params: {
                    lat: 54.6872,
                    lon: 25.2797,
                    unit_system: "si",
                    start_time: firstDay,
                    end_time: secondDay,
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
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        return (
            <DataImportComponent
                importData={() => this.importWeather(30)} />

        );
    }
}

export default DataImportContainer;
