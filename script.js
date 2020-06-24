var apiKey = "7563abe66b400c1ddd2f278ccaf0967b";

$("#search-button").on("click", function () {
    var cityName = $("#cityname").val();
    console.log(cityName);



    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey;
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response){
        var results = response.data
        
        for (var i=0; i < results.length; i++) {
            var displayDiv = $("<div>");
            var temp = results[i].list[i].main.temp;
            var tempP = $("<p>").text("Temperature: " + temp);
            console.log(tempP);
            console.log(displayDiv);
        }


    });
});






