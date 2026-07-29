import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/BookLists/BookLists";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => <div>Loading initial data...</div>,
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => <div>Loading initial data...</div>,
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
      {
        loader: () => fetch("/booksData.json"),
        HydrateFallback: () => <div>Loading initial data...</div>,
        path: "/readList",
        Component: ReadList,
      },
    ],
  },
]);
