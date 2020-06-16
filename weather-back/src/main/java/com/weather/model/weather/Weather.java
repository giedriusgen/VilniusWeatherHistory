package com.weather.model.weather;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Weather {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private double temp;
    private double windSpeed;
    @Temporal(TemporalType.TIME)
    private Date observationTime;
    @Temporal(TemporalType.DATE)
    private Date observationDate;
    @Column(unique = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    public Weather() {
    }

    public Weather(Long id, double temp, double windSpeed, Date observationTime, Date observationDate, Date timestamp) {
        this.id = id;
        this.temp = temp;
        this.windSpeed = windSpeed;
        this.observationTime = observationTime;
        this.observationDate = observationDate;
        this.timestamp = timestamp;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}

