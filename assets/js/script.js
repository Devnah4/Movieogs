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

    //reload page
    //location.reload();

    //call api fun
    fetchApi(userInput);

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
    });



}


// display 
function displaySearch(results){
    console.log("inside display search function");
    console.log(results);

    
    for (var i = 0; i < 6; i++){
        

        var movieItem ={
            title: results[i].title,
            description: results[i].description,
            image: results[i].image,
        };   
      
        document.getElementById("infoBox-" + i ).innerHTML = 
            `<div class ="card" style="width: 18rem;">
                <div class ="card-body">
                    <img class ="card-img-top" src=${movieItem.image}></img>
                    <h5 class ="card-title">${movieItem.title}</h5>
                    <p class ="card-text">${movieItem.description}</p>
                </div>
            </div>`;
 
}  

}; // end displaySearch

// display shopping results/ amazon/ best buy
function displayBuy(data){

}