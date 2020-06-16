package com.weather.controller;


import com.weather.model.weather.WeatherResponseRestDto;
import com.weather.model.weather.WeatherRestDto;
import com.weather.service.WeatherService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@RestController
@Api(value = "weather")
@RequestMapping(value = "/api/weather")
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @RequestMapping(path = "/date", method = RequestMethod.GET)
    @ApiOperation(value = "Get Weather by date", notes = "Returns list of weather by date")
    public List<WeatherResponseRestDto> getWeatherByDate(@ApiParam(value = "Observation date", required = true) @DateTimeFormat(pattern = "yyyy-MM-dd") @RequestParam("observationDate")Date observationDate) {
        return weatherService.getWeatherByDate(observationDate);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ApiOperation(value = "Create weather data", notes = "Creates weather data")
    @ResponseStatus(HttpStatus.CREATED)
    public void createWeather(
            @ApiParam(value = "Weather Data", required = true) @Valid @RequestBody final WeatherRestDto weatherRestDto) {
        weatherService.createWeather(weatherRestDto);

    }

    @RequestMapping(path = "/day", method = RequestMethod.POST)
    @ApiOperation(value = "Create weather data", notes = "Creates weather data")
    @ResponseStatus(HttpStatus.CREATED)
    public void createDayWeather(
            @ApiParam(value = "Weather Data", required = true) @Valid @RequestBody final Collection<WeatherRestDto> weatherRestDtos) {

        weatherService.createDayWeather(weatherRestDtos);

    }



}
