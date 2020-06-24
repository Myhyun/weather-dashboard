var apiKey = "7563abe66b400c1ddd2f278ccaf0967b";
var mainWeather = $(".current-weather");


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
            temp: response.list[0].main.temp
        }

        $(".displaycurrentWeather").addClass("card card-body")
        var currentCity = $("<p>");
        currentCity.text(JSON.stringify(mainWeather.cityName) + JSON.stringify(mainWeather.date));
        $(".displaycurrentWeather").append(currentCity);
        var currentTemp = $("<p>");
        currentTemp.text("Temperature: " + JSON.stringify(mainWeather.temp) + "  °F");
        $(".displaycurrentWeather").append(currentTemp);
        var currentHumidity = $("<p>");
        currentHumidity.text("Humidity: " + JSON.stringify(mainWeather.humidity) + " %");
        $(".displaycurrentWeather").append(currentHumidity);
        var currentWindspeed = $("<p>");
        currentWindspeed.text("Wind Speed: " + JSON.stringify(mainWeather.windSpeed) + " mph");
        $(".displaycurrentWeather").append(currentWindspeed);







    });
});
