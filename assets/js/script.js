var searchBtn = document.querySelector("#searchButton")
// var moviePhoto = document.querySelector("#image")
// var titleBox = document.querySelector("#title")
// var descriptionBox = document.querySelector("#description")
var searchMovie = document.querySelector("#userSearch")
var infoBox = document.querySelector('#infoBox')


// gets user input, passes to fetch api function
searchBtn.addEventListener("click", function (){
    var userInput = searchMovie.value
    console.log(userInput)

    //call api fun
    fetchApi(userInput);

    // var requestUrl =
    // "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

    // fetch(requestUrl)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     var results  = data.results;
       
    //     console.log(data)


    //     for (var i = 0; i < results.length; i++){
        
    //         console.log(results);

            
    //         var tilteUrl = document.createElement('h2');
    //         var descriptionUrl = document.createElement('p')
    //         var image = document.createElement('img')

    //         descriptionUrl.textContent = results[i].description
    //         tilteUrl.textContent = results[i].title;

    //         image.src = results[i].image

    //         infoBox.appendChild(descriptionUrl)
    //         infoBox.appendChild(tilteUrl);
    //         infoBox.appendChild(image)
            
    //         // console.log(tilteUrl)
    //         // console.log(descriptionUrl)
                
    //         //document.getElementById('image').append(image);
    // }        
    // });
})


// will get api's and call the right functions within
function fetchApi(userInput){

    console.log("inside fetch api function");

    var requestUrl =
    "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data) // testing
        
        var results  = data.results;
        
        displaySearch(results);

    //     for (var i = 0; i < results.length; i++){
        
    //         console.log(results);

            
    //         var tilteUrl = document.createElement('h2');
    //         var descriptionUrl = document.createElement('p')
    //         var image = document.createElement('img')

    //         descriptionUrl.textContent = results[i].description
    //         tilteUrl.textContent = results[i].title;

    //         image.src = results[i].image

    //         infoBox.appendChild(descriptionUrl)
    //         infoBox.appendChild(tilteUrl);
    //         infoBox.appendChild(image)
                
    // }  

    });



}


// display 
function displaySearch(results){
    console.log("inside display search function");

    for (var i = 0; i < results.length; i++){
        
        console.log(results);


        var movieItem ={
            title: results[i].title,
            description: results[i].description,
            image: results[i].image,
        }      
        
        document.getElementById("infoBox").innerHTML = 
            `<div class="card">
                <h2>${movieItem.title}</h2>
                <p>${movieItem.description}</p>
                <img src=${movieItem.image}></img>
            </div>`;
 
}  

}; // end displaySearch

// display shopping results/ amazon/ best buy
function displayBuy(data){

}