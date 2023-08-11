import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([...PublicRouter, ...PrivateRouter]);

export default Router;
