import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import UploadImg from "./test/UploadImg";
import Login from "./pages/Login";
import Protect from "./protect/Protect";
/*
import MyContext from "./test/MyContext";
import UserProfile from "./pages/UserProfile";
import Chatbox from "./pages/Chatbox";
*/

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            /*  <Protect>*/
            <Layouts>
                <Home />
            </Layouts>
            /* </Protect>*/
        )
    },
    {
        path: "/upload",
        element: <UploadImg />
    },
    {
        path: "/login",
        element: <Login />
    }
];

export default MyRoutes;
