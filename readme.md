# Vilnius Weather History
This application saves current Vilnius weather data every hour to database

 
## Getting Started

### Prerequisites

* Java 8+
* Node.js 8.10+
* Yarn 1.19.x
* Maven 3.6.x
* Tomcat 9.0.29
* H2 Database 1.4.200


### Installing

To install this application, run the following commands:

```
git clone https://github.com/giedriusgen/VilniusWeatherHistory.git
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.
To run Spring Boot API, cd into the weather-back folder and run:


```
mvn clean install spring-boot:run -Dspring-boot.run.arguments=--server.port=8081
```

To run React UI, cd into the weather-ui folder and run:
```
1. yarn install
2. yarn start
```


### Using


* Browse to http://localhost:3000/ to see REACT UI
* Browse to http://localhost:8081/swagger-ui.html/ to use Swagger
* Browse to http://localhost:8081/console/ to connect to database. In JDBC URL field enter db path: jdbc:h2:D:/db/weatherDb9.db. Username: sa. Password: (do not write anything). You can change DB location in application.properties file 
