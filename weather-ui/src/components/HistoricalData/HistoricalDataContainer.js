import React from 'react';
import HistoricalDataComponent from './HistoricalDataComponent';
import axios from "axios";
import serverUrl from "../URL/ServerUrl";

class HistoricalDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }

    handleDateChange = date => {
        this.setState({
            selectedDate: date,
            weatherData: [],
        });
    };

    getWeatherByDate = () => {
        axios
            .get(serverUrl + "api/weather/date", {
                params: {
                    observationDate: this.state.selectedDate,
                },
                headers: {
                    "apikey": "8aY6VButfxh1Rjx2bUfifgV6OUiBl3WR"
                }
            })
            .then(response => {
                this.setState({
                    weatherData: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    };


    render() {
        return (
            <HistoricalDataComponent
                selectedDate={this.state.selectedDate}
                dateChange={(date) => { this.handleDateChange(date) }}
                getWeather={this.getWeatherByDate}
                weatherData={this.state.weatherData}
            />
        );
    }
}


export default HistoricalDataContainer;
