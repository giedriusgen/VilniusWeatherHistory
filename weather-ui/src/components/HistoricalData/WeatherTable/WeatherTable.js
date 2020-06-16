import React from 'react';


class WeatherTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            weatherData: [],
            showWeatherTable: false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.weatherData !== prevProps.weatherData) {
            this.setState({
                weatherData: this.props.weatherData,
                showWeatherTable: this.props.weatherData.length > 0
            });
        }
    }

    render() {

        const weatherData = this.state.weatherData.map((weather, index) => (
            <tr key={index}>
                <th scope="row">{weather.observationTime}</th>
                <td>{weather.temp}</td>
                <td>{weather.windSpeed}</td>
            </tr>
        ));

        if (!this.state.showWeatherTable) {
            return null;
        }

        return (
            <table className="table ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Temperature (&#8451;)</th>
                        <th scope="col">Wind speed (m/s)</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData}
                </tbody>
            </table>
        );
    }
}

export default WeatherTable;

