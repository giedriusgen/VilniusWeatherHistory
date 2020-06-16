package com.weather.model.weather;

import java.util.Date;

public class WeatherResponseRestDto {

    private double temp;
    private double windSpeed;
    private Date observationTime;
    private Date observationDate;

    public WeatherResponseRestDto(){}

    public WeatherResponseRestDto(double temp, double windSpeed, Date observationTime, Date observationDate) {
        this.temp = temp;
        this.windSpeed = windSpeed;
        this.observationTime = observationTime;
        this.observationDate = observationDate;
    }

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public double getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public Date getObservationTime() {
        return observationTime;
    }

    public void setObservationTime(Date observationTime) {
        this.observationTime = observationTime;
    }

    public Date getObservationDate() {
        return observationDate;
    }

    public void setObservationDate(Date observationDate) {
        this.observationDate = observationDate;
    }
}
