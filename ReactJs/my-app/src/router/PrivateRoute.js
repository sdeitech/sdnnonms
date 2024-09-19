import {React} from "react";
import PrivateLayout from "../layout/PrivateLayout";
import NotFound from "../component/NotFound";
import UserManagement from "../component/UserManagement";

const privateRoutes = [
	// {
	// 	path: "/dashboard",
	// 	exact: true,
	// 	element: <PrivateLayout><Dashboard/></PrivateLayout>
	// },
	{
		path: "/users",
		exact: true,
		element: <PrivateLayout><UserManagement/></PrivateLayout>
	},
	{ path: "/*", element: <NotFound/> }
];
export default privateRoutes;
