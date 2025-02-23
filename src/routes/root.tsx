import {createBrowserRouter} from "react-router-dom";

// Pages
import App from '../App'
import VideoLibrary from "../pages/VideoLibrary";
import VideoPage from '../pages/[id]/player'


const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [],
      },
      {
        path: "/Library",
        element: <VideoLibrary />,
        children: [
          {
            path: "/Library/video/play/:id",
            element: <VideoPage />,
          },
        ],
      },
    ],
    { basename: "/vid-lib-mk2" } // the basename of this project ***essential***

);

export default router;