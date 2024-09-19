import { React } from "react";
import Form from "../material/form/Form";
import PublicLayout from "../layout/PublicLayout";

const publicRoutes = [
    {
        path: "/",
        exact: true,
        // element: <PublicLayout><SignIn /></PublicLayout>
        element: <PublicLayout><Form /></PublicLayout>
    },
    {
    	path: "/signUp",
    	exact: true,
    	element: <PublicLayout><div>Sign Up</div></PublicLayout>
    }
];
export default publicRoutes;
