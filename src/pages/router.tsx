import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello, World</div>,
  },
  {
    path: "/hello",
    element: <div>Hello, World 2</div>,
  },
]);
