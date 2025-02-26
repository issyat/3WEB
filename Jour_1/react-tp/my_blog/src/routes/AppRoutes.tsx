import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }   
]);

export default router;