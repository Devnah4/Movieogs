var searchBtn = document.querySelector("#searchButton")
var moviePhoto = document.querySelector("#image")
var titleBox = document.querySelector("#title")
var descriptionBox = document.querySelector("#description")


searchBtn.addEventListener("click", function (){
    var userInput = "bill and ted";
    var requestUrl =
    "https://imdb-api.com/en/API/SearchTitle/k_a7if4qo5/" + userInput;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results  = data.results;
        console.log(results);

        var tilteUrl = document.createElement('h2');
        tilteUrl.textContent = results[0].title;
        console.log(tilteUrl)
        titleBox.append(tilteUrl);


        var descriptionUrl = document.createElement('p')
        descriptionUrl.textContent = results[0].description
        console.log(descriptionUrl)
        descriptionBox.append(descriptionUrl)
        
        var image = document.createElement('img')
            image.src = results[0].image
            document.getElementById('image').append(image);
            
    });

    console.log(searchBtn)
})

// testing push -khai
