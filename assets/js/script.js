var searchBtn = document.querySelector("#searchButton")
var searchMovie = document.querySelector("#userSearch")
var infoBox = document.querySelector('#infoBox')

searchBtn.addEventListener("click", function () {
    var userInput = searchMovie.value
    var requestUrl = "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results  = data.results; 
        console.log(data);
        for (var i = 0; i < 6; i++) {
        
            var tilteUrl = document.createElement('h2');
            var descriptionUrl = document.createElement('p')
            var image = document.createElement('img')

            descriptionUrl.textContent = results[i].description;
            descriptionUrl.className = 'description';
            tilteUrl.textContent = results[i].title;
            tilteUrl.className = 'titles';
            image.src = results[i].image;
            image.className = 'image-infoBox';
            image.style.width = "200px";
            image.style.height = "350px";

            infoBox.appendChild(image);
            infoBox.appendChild(tilteUrl);
            infoBox.appendChild(descriptionUrl);
        }        
    });
})