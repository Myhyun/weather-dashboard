var apiKey = "7563abe66b400c1ddd2f278ccaf0967b";
var mainWeather = $(".current-weather");
var button = $("#search-button");

$("#search-button").on("click", function () {
    var search = $("#cityname").val();
    console.log(search);


    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&units=imperial&appid=" + apiKey;
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var mainWeather = {
            cityName: response.city.name,
            date: response.list[0].dt_txt,
            humidity: response.list[0].main.humidity,
            windSpeed: response.list[0].wind.speed,
            temp: response.list[0].main.temp,
            icon: response.list[0].weather[0].icon,
        }
        for (var i = 1; i < 6; i++) {
            var futureWeather = {
                humidity: response.list[i].main.humidity,
                temp: response.list[i].main.temp,
                date: response.list[i].dt_txt,
                icon: response.list[i].weather[0].icon,
            };

            var futureiconCode = futureWeather.icon;
            var futureiconUrl = "http://openweathermap.org/img/w/" + futureiconCode + ".png";
            var futuredate = futureWeather.date

            console.log(futureWeather)

            var childfutureDiv = $("<div>");
            childfutureDiv.addClass("col-md-2 bg-primary ml-3 text-light");
            $(".futurediv").append(childfutureDiv);

            var futureDate = $("<p>");
            futureDate.text(moment(futuredate).format("L"));
            console.log(futureDate)
            var futureIcon = $("<img>")
            futureIcon.attr('src', futureiconUrl);
            futureDate.append(futureIcon);

            childfutureDiv.append(futureDate);

            var futureHumidity = $("<p>");
            futureHumidity.text("Humidity: " + JSON.stringify(futureWeather.humidity) + "%");
            console.log(futureHumidity)
            childfutureDiv.append(futureHumidity);

            var futureTemp = $("<p>");
            futureTemp.text("Temp: " + JSON.stringify(futureWeather.temp) + "°F");
            console.log(futureTemp)
            childfutureDiv.append(futureTemp);

        };
        
        
        var iconcode = mainWeather.icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        $(".displaycurrentWeather").addClass("card card-body");

        var currentCity = $("<p>");
        currentCity.addClass("font-weight-bold")
        currentCity.text(JSON.stringify(mainWeather.cityName))
        var currentIcon = $("<img>");
        currentIcon.attr('src', iconurl);
        currentCity.append(currentIcon);
        $(".displaycurrentWeather").append(currentCity);

        var currentTemp = $("<p>");
        currentTemp.text("Temperature: " + JSON.stringify(mainWeather.temp) + "  °F");
        $(".displaycurrentWeather").append(currentTemp);

        var currentHumidity = $("<p>");
        currentHumidity.text("Humidity: " + JSON.stringify(mainWeather.humidity) + " %");
        $(".displaycurrentWeather").append(currentHumidity);

        var currentWindspeed = $("<p>");
        currentWindspeed.text("Wind Speed: " + JSON.stringify(mainWeather.windSpeed) + " MPH");
        $(".displaycurrentWeather").append(currentWindspeed);


    });
});


