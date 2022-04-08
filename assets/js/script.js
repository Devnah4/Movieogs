var searchBtn = document.querySelector("#searchButton");
var searchBook = document.querySelector("#searchBook");
// var moviePhoto = document.querySelector("#image")
// var titleBox = document.querySelector("#title")
// var descriptionBox = document.querySelector("#description")
var searchMovie = document.querySelector("#userSearch");
var infoBox = document.querySelector("#infoBox");
var googleApi = 'AIzaSyAH7Ftu1pU975MStP0M3ev6DEiGQqSkzF0';

// gets user movie input, passes to fetch api function
searchBtn.addEventListener("click", function () {
  var userInput = searchMovie.value;
  console.log(userInput);

  //call movie api function
  fetchApi(userInput);
});

searchBook.addEventListener("click",function(){
    var userInput = searchMovie.value;

})


// will get api's and call the right functions within
function fetchApi(userInput) {
  console.log("inside fetch api function");
// hide key later
  var requestUrl =
    "https://imdb-api.com/en/API/SearchTitle/k_2zr46be6/" + userInput;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // testing
      var results = data.results;
      displaySearch(results);

      // do second fetch for youtube trailer
    });
}

// display
function displaySearch(results) {
  console.log("inside display search function");
  console.log(results);

  for (var i = 0; i < 6; i++) {
    var movieItem = {
      title: results[i].title,
      description: results[i].description,
      image: results[i].image,
      link: results[i].id,
    };

  // display info to page 
  document.getElementById(
    "infoBox-" + i
  ).innerHTML = `<div class ="card" style="width: 18rem;">
              <div class ="card-body">
                  <img class ="card-img-top" src=${movieItem.image}></img>
                  <h6 class ="card-title">${movieItem.title}</h5>
                  <p class ="card-text">${movieItem.description}</p>
                  <a href ="https://www.imdb.com/title/${movieItem.link}" class="card-link" target ="_blank">Click here for more info!</a>
              </div>
          </div>`;

  }
} // end displaySearch


function fetchBookApi(userInput){
    infoBox.innerHTML = '';
    console.log(searchMovie.value);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookInput}:keyes&key=${googleApi}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results = data.items;
        console.log(data);
       displayBook(results);
    });
};


function displayBook(results){
    
    for (var i = 0; i < 6; i++) {
        var movieItem = {
          title: results[i].title,
          description: results[i].description,
          image: results[i].image,
          link: results[i].id,
        };
    
      // display info to page 
      document.getElementById(
        "infoBox-" + i
      ).innerHTML = `<div class ="card" style="width: 18rem;">
                  <div class ="card-body">
                      <img class ="card-img-top" src=${movieItem.image}></img>
                      <h6 class ="card-title">${movieItem.title}</h5>
                      <p class ="card-text">${movieItem.description}</p>
                      <a href ="https://www.imdb.com/title/${movieItem.link}" class="card-link" target ="_blank">Click here for more info!</a>
                  </div>
              </div>`;
    
      }
}

