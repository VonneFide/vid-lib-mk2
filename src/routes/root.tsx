import {createBrowserRouter} from "react-router-dom";

// Pages
import App from '../App'
import VideoLibrary from "../pages/VideoLibrary";


const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [],
      },
      {
        path: "/library",
        element: <VideoLibrary />,
        children: [],
      },
    ],
    { basename: "/vid-lib-mk2" } // the basename of this project ***essential***

);

export default router;