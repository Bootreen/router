import "./index.css";
// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout/RootLayout";
import Home from "./routes/Home/Home";
import Movies from "./routes/Movies/Movies";
import Actors from "./routes/Actors/Actors";
import MoviePreview from "./components/MoviePreview/MoviePreview";
import ActorDetails from "./components/ActorDetails/ActorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [{ path: ":movieId", element: <MoviePreview /> }],
      },
      {
        path: "/actors",
        element: <Actors />,
        children: [{ path: ":actorId", element: <ActorDetails /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
