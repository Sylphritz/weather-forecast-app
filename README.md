# Weather Forecast Web Application (Made with Vue.js)

### [Live Demo](https://vue-weather-app-codementor.netlify.app/)

The app is a simple weather forecast web application. You enter the location name you want or let the browser detect your location for you, and then the app will show you the weather forecast of the specified location.

This is a Vue project made to showcase various aspects of the Vue.js framework and is purely used for educational purposes.

The app utilizes the following tools and libraries:

- **TypeScript** - to add type checking to the project.
- **Font Awesome icons** - for weather icons.
- **Fontsource** - self-hosted Google Fonts.
- **Axios** - for fetching data from the Open Meteo API service.
- **date-fns** - for formatting date and time.
- **Pinia** - Vue's official state management library. This is for storing user's location information and for saving/loading user's dark mode preference.
- **Vue Router** - for routing and stuff.
- **TailwindCSS** - for an easier time building the UI.

Feel free to fork and open pull requests if you're interested in contributing.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
