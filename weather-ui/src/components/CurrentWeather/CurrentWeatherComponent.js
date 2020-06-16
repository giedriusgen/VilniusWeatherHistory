import React from "react";

const currentWeatherComponent = (props) => (
    <div className="my-3">
        <p>This application saves current Vilnius weather data every hour to database  </p>
        <p>Under History tab you can view history of Vilnius weather by selecting a date  </p>
        <p>Under Import data tab you can import Vilnius weather data of last 30 days   </p>
        <p>At this moment application saves and displays Temperature and Wind speed parameters but it can easily be added others </p>
    </div>
);

export default currentWeatherComponent;

