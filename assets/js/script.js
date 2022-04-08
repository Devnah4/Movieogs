var searchBtn = document.querySelector("#movieBtn");
var searchMovie = document.querySelector("#userSearch");
var infoBox = document.querySelector('#infoBox');
var heroImage = document.querySelector('#hero-img')

searchBtn.addEventListener("click", function () {
    var userInput = searchMovie.value;
    var requestUrl = "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;
    infoBox.innerHTML = '';
    // heroImage.style.display = 'none';
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results  = data.results; 
        console.log(data);
        for (var i = 0; i < 6; i++) {
        
            var movieContainer = document.createElement('article');
            var tilteUrl = document.createElement('h2');
            var descriptionUrl = document.createElement('p');
            var image = document.createElement('img');
            var link = document.createElement('a');

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
            // Link to IMDB
            link.href = 'https://www.imdb.com/title/' + results[i].id;
            link.innerHTML = 'Click here for more!';
            link.className = 'linkInfo';
            link.target = '_blank'

            // Create the Elements
            movieContainer.appendChild(image);
            movieContainer.appendChild(tilteUrl);
            movieContainer.appendChild(descriptionUrl);
            movieContainer.appendChild(link);
            infoBox.appendChild(movieContainer);
        }        
    });
    
})

// function youtubeTrailer (titleId) {
//     // Pulls Youtube Link to trailer
//     var trailer = document.createElement('iframe');
//     var youtubeUrl = "https://imdb-api.com/en/API/YouTubeTrailer/k_239ztyjp/" + titleId;
//     fetch(youtubeUrl)
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//     console.log(data);
//     console.log(data.videoId);
//         // Youtube Elements
//         trailer.src = 'https://www.youtube.com/embed/' + data.videoId;
//         trailer.style.width = "350px";
//         trailer.style.height = "200px";
//         // Trailer Append
//         infoBox.appendChild(trailer);
//     })
// }