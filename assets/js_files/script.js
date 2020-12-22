$(function () {

    var apiKey = "b49c26cbda0627b6ceb0dc8596060a98";
    var city = "San Diego";

    var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (data) {

        console.log(data);

    })


        // // creating for form submission!
        // // $(document).on("click", ".city", function () {
        // $(document).on("submit", function (event) {

        // event.preventDefault;

        // // var city = $(this).attr("data-city");

        // var queryUrl =
        //     "https://api.openweathermap.org/data/2.5/weather?q=" +
        //     city +
        //     "&units=imperial&appid=" +
        //     apiKey;

        // $.ajax({
        //     url: queryUrl,
        //     method: "GET",
        // }).then(function (data) {

        //     console.log(data);

        //     $(".city_name").text(data.name + " Weather")
        //     $("#temp").text(data.main.temp + " °")
        //     $("#wind").text(data.wind.speed + " MPH")
        //     $("#humidity").text(data.main.speed + " %")



        // })





        /* Make code that works for the buttons!!! */
        // $(document).on("click", ".city", function () {


    })