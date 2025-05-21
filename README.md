# Personal Movie Library - Interview Exercise

Welcome to the interview exercise! This project challenges you to develop a personal movie library application. You will have **one hour** to implement a defined set of core features.

## Tech Stack

This project is built with the following core technologies:

*   **Next.js:** A React framework for building server-rendered applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **`usehooks-ts`:** A collection of useful React hooks, including `useLocalStorage` which might be helpful for this exercise.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Install Dependencies:**
    Open your terminal, navigate to the project directory, and run:
    ```bash
    npm install
    ```
    This command will download and install all the necessary packages defined in `package.json`.

2.  **Run the Development Server:**
    Once the dependencies are installed, you can start the development server:
    ```bash
    npm run dev
    ```
    This will start the application in development mode, typically available at `http://localhost:3000` in your web browser. The server will automatically reload if you make changes to the code.

## Available Scripts

This project includes the following scripts, which can be run using `npm run <script_name>`:

*   `dev`: Starts the development server using Next.js with Turbopack enabled (`next dev --turbopack`). Ideal for working on the project with fast refresh.
*   `build`: Builds the application for production usage (`next build`). This compiles the Next.js application into an optimized set of static assets and server-side code.
*   `start`: Starts a Next.js production server (`next start`). This script should be used after you have built the application with `npm run build`.
*   `lint`: Runs ESLint to perform static analysis on your code (`next lint`). Helps in identifying and fixing code style issues and potential errors.

## Your Task & Expectations

*   **Time Limit:** You have **one hour** to complete the core features.
*   **Focus:** Prioritize implementing the core features listed below. Aim for functionality over perfection within the time constraint.
*   **Starting Point:** You will begin with the current very minimal setup (a "Hello World" page). Your task is to build out the movie library functionality from there.
*   **Using Resources:** We recommend utilizing the provided resources (OMDB API for movie data, `usehooks-ts` for `useLocalStorage` if you choose to store data locally) to help you complete the task efficiently.
*   **Code Quality:** While speed is important, try to maintain clean, readable code. ESLint is set up to help with consistency.

## Core Features to Implement

Your primary goal is to implement the following core features for the movie library:

1.  **Display Movie List:** The application should fetch (e.g., from OMDB API or a mock list) and display a list of movies. Each movie entry should ideally show basic information like title, year, and poster.
2.  **Add Movie to Watchlist:** Users must be able to add new movies to their personal watchlist. This could involve searching the OMDB API and then adding a selected movie.
3.  **Mark as Watched/Unwatched:** Users should be able to toggle the status of a movie in their watchlist between 'watched' and 'unwatched'.

## Helpful Resources

Here are some resources that might be useful for completing the exercise:

*   **OMDB API:** (`https://www.omdbapi.com/`)
    *   Use this API to search for movies and fetch their details.
    *   An API key is provided: `dceb92db` (e.g., `http://www.omdbapi.com/?apikey=dceb92db&s=Batman`)
*   **`useLocalStorage` Hook:** (from `usehooks-ts` - `https://usehooks-ts.com/react-hook/use-local-storage`)
    *   This custom hook can be very helpful for persisting the user's watchlist data in the browser's local storage. This means the data won't disappear when the page is refreshed.
*   **Lucide Icons:** (`https://lucide.dev/`)
    *   This project includes `lucide-react` for easy-to-use icons if you wish to enhance the UI.

## Follow up questions

1.  What other features would you add? How would you implement them?
