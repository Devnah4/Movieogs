var searchBtn = document.querySelector("#searchButton");
var searchBook = document.querySelector("#searchBook");
var searchMovie = document.querySelector("#userSearch");
var infoBox = document.querySelector("#infoBox");
var googleApi = 'AIzaSyAH7Ftu1pU975MStP0M3ev6DEiGQqSkzF0';
var imdbApi = 'k_2zr46be6';

// gets user movie input, passes to fetch api function
searchBtn.addEventListener("click", function () {
  var userInput = searchMovie.value;
 // infoBox.innerHTML = '';
  //call movie api function
  fetchApi(userInput);
});

searchBook.addEventListener("click",function(){
    var userInput = searchMovie.value;
   // infoBox.innerHTML = '';
    // call book api function 
    fetchBookApi(userInput);

})


// will get api's and call the right functions within
function fetchApi(userInput) {
    // clear old document
   
// hide key later
  var requestUrl =
    `https://imdb-api.com/en/API/SearchTitle/${imdbApi}/${userInput}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // testing
      var results = data.results;
      displaySearch(results);
        
      // do second fetch for youtube trailer
    })
    .catch(function(error){
        alert("Error. Please enter a valid search")
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
    
    console.log(searchMovie.value);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}:keyes&key=${googleApi}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var results = data.items;
        console.log(data);
       displayBook(results);
    })
    .catch(function(error){
        alert("Error. Please enter a valid search")
    });
};

// fix items
function displayBook(results){

    for (var i = 0; i < 6; i++) {
        var bookItem = {
          title: results[i].volumeInfo.title,
          description: results[i].volumeInfo.description,
          image: results[i].volumeInfo.imageLinks.thumbnail,
          link: results[i].saleInfo.buyLink,
        };
    
      // display info to page 
      document.getElementById(
        "infoBox-" + i
      ).innerHTML = `<div class ="card" style="width: 18rem;">
                  <div class ="card-body">
                      <img class ="card-img-top" src=${bookItem.image}></img>
                      <h6 class ="card-title">${bookItem.title}</h5>
                      <p class ="card-text">${bookItem.description}</p>
                      <a href ="${bookItem.link}" class="card-link" target ="_blank">Click here for more info!</a>
                  </div>
              </div>`;
    
      }
}

