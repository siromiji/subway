import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../App";
import Main from '../conponents/MapPage.jsx';
import MapPage from "../conponents/MapPage.jsx";

const router = createBrowserRouter([
    {
        element:<App/>,
        children : [
            {
                path: '/',
                element: <MapPage/>
            }
        ]
        
    }
]);
function Router(){
     return <RouterProvider router={router}/>
}
export default Router;