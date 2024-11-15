import dotenv from 'dotenv';

dotenv.config();

/*
    Get your API key from [The Movie Database](https://www.themoviedb.org/settings/api)
    Create `.env` file in the root of the project and add your API key to it
*/

export const apiKey = `api_key=${process.env.API_KEY}`;

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?${apiKey}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?${apiKey}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?${apiKey}`,
};