import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { SearchedMovies, Home, Recommendation, MovieDetails } from "./pages";
import { AppContextProvider } from "./context";
import { ProviderWrapper, ErrorPage } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <ProviderWrapper>
          <CssBaseline />
          <App />
        </ProviderWrapper>
      </AppContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie-details",
        element: <MovieDetails />,
      },
      {
        path: "search/*",
        element: <SearchedMovies />,
      },
      {
        path: "recommend/*",
        element: <MovieDetails />,
      },
      {
        path: "recommend",
        element: <Recommendation />,
      },
      { element: <ErrorPage />, path: "*" },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
