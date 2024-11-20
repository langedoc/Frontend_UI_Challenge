# Frontend_UI_Challenge

A React-based web application for browsing movies. Users can explore movie details and add movies to a personal wishlist.

## Features

- Browse movies in three categories:
  - Popular Movies
  - Upcoming Movies
  - Top Rated Movies

- Detailed view for each movie includes:
  - Movie poster
  - Title
  - Overview
  - Language
  - Release date
  - Rating and vote count

- Personal wishlist

## Technologies Used

- React 18
- React Router DOM
- SASS/SCSS for styling
- Webpack for bundling
- Jest for testing
- React Testing Library
- React Icons


## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone git@github.com:langedoc/Frontend_UI_Challenge.git
```
2. Install dependencies:

```bash
npm install
```

3. Set up your API key:
   - Get your API key from [The Movie Database](https://www.themoviedb.org/settings/api)
   - Create a `.env` file in the root of the project
   - Add your API key to the `.env` file:
   ```bash
   API_KEY=your_api_key_here
   ```

### Running the Application

Development mode:

```bash
npm start
```

Run SASS compiler:

```bash
npm run sass
```

### Testing

Run tests:

```bash
npm test
```

Check test coverage:

```bash
npm test:coverage
```

## License

This project is licensed under the ISC License.

## Author

YuliaKapustina