import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WeatherTable from './WeatherTable/WeatherTable';



const historicalDataComponent = (props) => (
    <div className="m-3">
        <label>Select a date: </label>
        <div className="input-group mb-3">
            <DatePicker
                value={props.selectedDate}
                selected={props.selectedDate}
                onChange={props.dateChange}
                name="startDate"
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
            />
            <div className="input-group-append">
                <button onClick={props.getWeather}>GO</button>
            </div>
        </div>
        < WeatherTable
            weatherData={props.weatherData}
        />


    </div>
);

export default historicalDataComponent;

