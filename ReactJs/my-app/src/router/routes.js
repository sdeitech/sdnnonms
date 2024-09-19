import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoute";
import { createBrowserRouter} from "react-router-dom";

const routers = createBrowserRouter([
	...publicRoutes,
	...privateRoutes
]);

export default routers;
