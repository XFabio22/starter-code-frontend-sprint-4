
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = movies.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let nombreDirector = document.getElementById("nombreDirector").value;
  const result2 = movies.filter(movie => movie.director == nombreDirector)
  console.log("EXERCICE 2 ->",result2)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let nombreDirector = document.getElementById("nombreDirector2").value;
  let contador = 0;
  let puntos;
  const result3 = movies.reduce( (puntosTotal, peli) => {
    if(peli.director === nombreDirector &&  peli.score !== ""){
      contador++;
      puntosTotal += peli.score;
    }
    return puntosTotal; 

  }, 0)
  puntos = Number ((result3 / contador).toFixed(2));
  console.log("EXERCICE 3 ->" ,puntos);
  return puntos;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result4 = movies.sort((a,b)  =>{
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1
    }
    return 0;
  })
  
  console.log("EXERCICE 4 ->" ,result4.slice(0,20));
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  let result5 = movies.sort((a,b)  =>{
    if (a.year < b.year){
      return -1;
    }
    if (a.year > b.year){
      return 1
    }
    return 0;
  })
  
  console.log("EXERCICE 4 ->" ,result5.slice(0,20));
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
