import { fetchMovies } from "./fetchmovies";

const baseUrlImg = "https://image.tmdb.org/t/p/w500/";

const getMoveis = async () => {
  const movies = await fetchMovies();
  movies.forEach((movie) => {
    printMovies(movie);
  });
};

getMoveis();

const moviesContainer = document.querySelector(".movie-container");

const printMovies = (movie) => {
  const movieTitle = document.createElement("p");
  movieTitle.innerText = movie.title;
  moviesContainer.appendChild(movieTitle);

  const movieImg = document.createElement("img");
  movieImg.src = `${baseUrlImg}${movie.poster_path}`;
  moviesContainer.appendChild(movieImg);
};
