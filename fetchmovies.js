export const fetchMovies = async () => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data.results;
};

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVlMDk4OTc0Yjg5OWMzNDAzOTdmYTI5ZDFmZWUxZSIsInN1YiI6IjY1ZmYyNTU1NDU5YWQ2MDE4N2Y4N2IwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ldq0OAo-09HyVtDvIlL1l8VixP3xUnR8a-otgrNEoe8",
  },
};
