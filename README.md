# Filmes Series API

## Description

Filmes Series API is a Node.js application that fetches movie and series data using IMDb's unofficial API. It's built using Express for the server-side and Axios for HTTP requests.

## Requirements

- Node.js
- Express
- Axios
- CORS

## Installation

Clone the repository:

```bash
git clone https://github.com/NeguinDev/filmes-series-api.git
```

Install the dependencies:

```bash
npm install
```

## Usage

To start the application, run:

```bash
npm start
```

## API Endpoints

- `GET /filme?nome=<movie_name>`: Fetches movie data based on the movie name.
- `GET /serie?nome=<series_name>`: Fetches series data based on the series name.

## Features

- Fetches movie and series data from IMDb.
- Filters the data to provide essential details like title, year, IMDb ID, image URL, actors, director, and genre.

## Contribution

Feel free to contribute to the project. Open a PR or an issue for discussions.

## License

ISC
