// -------------------------------------//
//----------API key---------------------//
//--------------------------------------//

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGZiNDJjMmNiMjNkYmJkODVjNTg0MGQ3OTMzNGU0YyIsInN1YiI6IjY2NGM0ZWIxYWNlYmFjMGU0NzhhMDYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GEEItj67gccsnMJ4434qXrodKCHAI4FYJD8pBGEFoX8",
  },
};

// -------------------------------------//
//----------Fetch Movies----------------//
//--------------------------------------//

fetchMovies();

// -------------------------------------//
//----------Image path in API-----------//
//--------------------------------------//

function getImage(imgPath) {
  return `https://image.tmdb.org/t/p/original${imgPath}`;
}

// -------------------------------------//
//----------Fetching movies-------------//
//--------------------------------------//

function fetchMovies() {
  const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=Israel`;
  fetch(URL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching failed");
      }
      return response.json();
    })

    .then((response) => {
      response.results.forEach((movie) => {
        // Movie instance
        const newMovie = new Movie(
          movie.title,
          movie.release_date,
          getImage(movie.poster_path),
          movie.vote_average
        );
        createMovieCard(newMovie);
      });
      // Update item count
      updateItemCount();
    })
    .catch((error) => console.error(error));
}

// -------------------------------------//
//----------Update item count-----------//
//--------------------------------------//

function updateItemCount() {
  const sortBar = document.querySelector(".sort-bar");
  const movies = document.querySelectorAll(".movie");
  const movieCount = movies.length;
  sortBar.textContent = movieCount;
}

// -------------------------------------//
//----------Create movie card-----------//
//--------------------------------------//

function createMovieCard(movie) {
  let target = document.querySelector(".movies-list");
  target.innerHTML += `
     <div class="movie">
       <img class="vector-img" src="./images/Vector.svg">
       <a href="#">
       <img class="poster-img" src="./images/tabler-icon-plus.svg">
       </a>
       <img class="poster" src=${movie.getPicture()}>
       <p><strong>${movie.title}</strong></p>
       <p>Release: ${movie.releaseDate}</p>
       <p>Rating: ${movie.rating}</p>
     `;
}

// -------------------------------------//
//----------Movie constructor-----------//
//--------------------------------------//

class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseDate() {
    return this.releaseDate;
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}
