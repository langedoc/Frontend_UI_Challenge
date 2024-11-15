/*
    Get your API key from [The Movie Database](https://www.themoviedb.org/settings/api)
    Create `.env` file in the root of the project and add your API key to it
*/

export const apiKey = `api_key=${process.env.API_KEY}`;

export const BASE_URL = "https://api.themoviedb.org/3/movie";

export const getPopularMovies = () => fetchRequest(`/popular?${apiKey}`);
export const getTopRatedMovies = () => fetchRequest(`/top_rated?${apiKey}`);
export const getUpcomingMovies = () => fetchRequest(`/upcoming?${apiKey}`);

export const fetchRequest = (url) => {
    return fetch(`${BASE_URL}${url}`)
        .then(res => res.json())
        .catch(err => console.log(err));
};
