
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
  let forYears = movies.sort((a,b) =>  {
    return a.year - b.year;
  })
let froAbc = forYears.sort((a,b)=> {
  if(a.year === b.year){
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1
    }
  
  }
})
  console.log("EXERCICE 5 ->" ,froAbc);
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

  let categoria = document.getElementById("categoria").value;
  let contador = 0;
  let puntos;
  const result6 = movies.reduce( (puntosTotal, peli) => {
    if(peli.genre[length] == categoria &&  peli.score !== ""){
      contador++;
      puntosTotal += peli.score;
    }
    return puntosTotal; 

  }, 0)
  puntos = Number ((result6 / contador).toFixed(2));
  console.log("EXERCICE 6 ->" ,puntos);
  return puntos;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  let arrayEnMin = [];
  let arrayMovie = movies.map((peli)=> peli)
  let DurationMovie = arrayMovie.map((peli)=> {
    return  { ...peli, duration: cambiandoDeHAMin(peli.duration) };
  });

  console.log('EXERCICE 7 -> ', DurationMovie);
  return DurationMovie;
}
 
function cambiandoDeHAMin(duration){

 const dataMovies = duration.split(' ');
 let total = 0;
 let hoursToMinutes = parseInt(dataMovies[0]) * 60;
 let minutos;

if(dataMovies.length > 1){
 minutos = parseInt(dataMovies[1]);
 total += hoursToMinutes + minutos;
}else{
 total += hoursToMinutes;
}
 return total;
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
