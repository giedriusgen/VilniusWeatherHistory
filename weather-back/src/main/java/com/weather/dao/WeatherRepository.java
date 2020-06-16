package com.weather.dao;

import com.weather.model.weather.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface WeatherRepository extends JpaRepository<Weather, Long> {
    List<Weather> findByObservationDateOrderByTimestampAsc(Date observationDate);
    List<Weather> findByTimestamp(Date timestamp);


}
