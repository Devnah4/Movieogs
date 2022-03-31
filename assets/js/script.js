var searchBtn = document.querySelector("#searchButton")
var moviePhoto = document.querySelector("#image")
var titleBox = document.querySelector("#title")
var descriptionBox = document.querySelector("#description")
var searchMovie = document.querySelector("#userSearch")


searchBtn.addEventListener("click", function (){
    var userInput = searchMovie.value
    console.log(userInput)
    var requestUrl =
    "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results  = data.results;
        debugger
        for (var i = 0; i < data.length; i++){
        
        console.log(results);

        var tilteUrl = document.createElement('h2');
        var descriptionUrl = document.createElement('p')

        descriptionUrl.textContent = results[i].description
        tilteUrl.textContent = results[i].title;

        descriptionBox.append(descriptionUrl)
        titleBox.append(tilteUrl);

        console.log(tilteUrl)
        console.log(descriptionUrl)
        
        
        // var image = document.createElement('img')
        // image.src = results[0].image
        // document.getElementById('image').append(image);
    }        
    });

    console.log(searchBtn)
})


