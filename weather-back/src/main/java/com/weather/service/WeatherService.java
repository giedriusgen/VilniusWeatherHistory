package com.weather.service;

import com.weather.dao.WeatherRepository;

import com.weather.model.weather.Weather;
import com.weather.model.weather.WeatherResponseRestDto;
import com.weather.model.weather.WeatherRestDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeatherService {

    private WeatherRepository weatherRepository;

    @Autowired
    public WeatherService(WeatherRepository weatherRepository) {
        this.weatherRepository = weatherRepository;
    }


    @Transactional(readOnly = true)
    public List<WeatherResponseRestDto> getWeatherByDate(Date observationDate) {
        return weatherRepository.findByObservationDateOrderByTimestampAsc(observationDate).stream()
                .map((weather) -> new WeatherResponseRestDto(weather.getTemp(), weather.getWindSpeed(),
                        weather.getObservationTime(), weather.getObservationDate()))
                .collect(Collectors.toList());
    }


    @Transactional
    public void createWeather(WeatherRestDto weatherRestDto) {
        if(weatherRepository.findByTimestamp(weatherRestDto.getTimestamp()).size()==0){
            Weather weather = new Weather();
            weather.setObservationDate(weatherRestDto.getObservationDate());
            weather.setObservationTime(weatherRestDto.getObservationTime());
            weather.setTemp(weatherRestDto.getTemp());
            weather.setWindSpeed(weatherRestDto.getWindSpeed());
            weather.setTimestamp(weatherRestDto.getTimestamp());
            weatherRepository.save(weather);
        }
    }

    @Transactional
    public void createDayWeather(Collection<WeatherRestDto> weatherRestDtos) {
        for(WeatherRestDto dto: weatherRestDtos){
            if(weatherRepository.findByTimestamp(dto.getTimestamp()).size()==0) {
                Weather weather = new Weather();
                weather.setObservationDate(dto.getObservationDate());
                weather.setObservationTime(dto.getObservationTime());
                weather.setTemp(dto.getTemp());
                weather.setWindSpeed(dto.getWindSpeed());
                weather.setTimestamp(dto.getTimestamp());
                weatherRepository.save(weather);
            }
        }

    }


}
