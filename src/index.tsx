import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import App from "./App";
import { Settings, Home, Recommendation } from "./pages";
import { AppContextProvider } from "./context";
import { ProviderWrapper } from "./components/Provider";
import { MovieDetails } from "./pages/MovieDetails";

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
        path: "settings",
        element: <Settings />,
      },
      {
        path: "recommend",
        element: <Recommendation />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
