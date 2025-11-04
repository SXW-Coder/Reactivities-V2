import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashBoard from "../../features/activities/ActivityDashBoard";
import ActivityForm from "../../features/form/ActivityForm";
import ActivityDetail from "../../features/details/ActivityDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {path:'',element:<HomePage />},
            {path:'activities',element:<ActivityDashBoard />},
            {path:'activities/:id',element:<ActivityDetail />},
            {path:'createActivity',element:<ActivityForm key='create' />},
            {path:'manage/:id',element:<ActivityForm />}

        ]
    }
])