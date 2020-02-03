# Spotiapp

Angular 8 app wich consumes Spotify API and shows last releases. 

It also allows the user to play the songs and visit the artist's Spotify page.
The app includes search of song's and artists from spotify. 

## Requirements
You need to register at [Spotify developers ](https://developer.spotify.com/) and get your own auth token and next put it on `src/app/services/spotify.service.ts` on Authorization headears 'Bearer `<auth_token>`'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

