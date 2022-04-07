var searchBtn = document.querySelector("#searchButton");
var searchMovie = document.querySelector("#userSearch");
var infoBox = document.querySelector('#infoBox');
var heroImage = document.querySelector('#hero-img')

searchBtn.addEventListener("click", function () {
    var userInput = searchMovie.value;
    var requestUrl = "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

    // heroImage.style.display = 'none';
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results  = data.results; 
        console.log(data);
        for (var i = 0; i < 6; i++) {
        
            var tilteUrl = document.createElement('h2');
            var descriptionUrl = document.createElement('p');
            var image = document.createElement('img');
            var trailer = document.createElement('iframe');
            
            // Pulls Youtube Link to trailer
            var titleId = results[i].id;
            var youtubeUrl = "https://imdb-api.com/en/API/YouTubeTrailer/k_a7if4qo5/" + titleId;
            fetch(youtubeUrl)
            .then(function (respond) {
            return respond.json();
            })
            .then(function (videoInfo) {
            console.log(videoInfo);
            for (var i=0; i < 6; i++) {
                // Youtube Elements
                trailer.src = 'https://www.youtube.com/watch?v=&output=embed' + videoInfo.videoId;
                trailer.style.width = "200px";
                trailer.style.width = "350px";
                // Trailer Append
                infoBox.appendChild(trailer);
                }
            })

            // Description Elements
            descriptionUrl.textContent = results[i].description;
            descriptionUrl.className = 'description';
            // Title Elements
            tilteUrl.textContent = results[i].title;
            tilteUrl.className = 'titles';
            // Image Elements
            image.src = results[i].image;
            image.className = 'image-infoBox';
            image.style.width = "200px";
            image.style.height = "350px";
            

            // Create the Elements
            infoBox.appendChild(image);
            infoBox.appendChild(tilteUrl);
            infoBox.appendChild(descriptionUrl);
        }        
    });
    
})