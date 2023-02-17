import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Settings, Home, Recommendation } from "./pages";
import { AppContextProvider } from "./context";
import { ProviderWrapper } from "./components/Provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <ProviderWrapper>
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
