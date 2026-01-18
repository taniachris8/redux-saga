import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ServicePage } from "./pages/ServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/:id/details",
    element: <ServicePage />,
  },
]);
