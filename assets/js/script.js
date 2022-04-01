var searchBtn = document.querySelector("#searchButton")
// var moviePhoto = document.querySelector("#image")
// var titleBox = document.querySelector("#title")
// var descriptionBox = document.querySelector("#description")
var searchMovie = document.querySelector("#userSearch")
var infoBox = document.querySelector('#infoBox')

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
        //console.log(JSON.stringify(data)) 
        console.log(data)


        for (var i = 0; i < results.length; i++){
        
            console.log(results);

            
            var tilteUrl = document.createElement('h2');
            var descriptionUrl = document.createElement('p')
            var image = document.createElement('img')

            descriptionUrl.textContent = results[i].description
            tilteUrl.textContent = results[i].title;

            image.src = results[i].image

            infoBox.appendChild(descriptionUrl)
            infoBox.appendChild(tilteUrl);
            infoBox.appendChild(image)
            
            // console.log(tilteUrl)
            // console.log(descriptionUrl)
                
            //document.getElementById('image').append(image);
    }        
    });

    console.log(searchBtn)
})

// testing push -khai hello 
