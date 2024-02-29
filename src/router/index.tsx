import { createBrowserRouter } from "react-router-dom";

import {Home} from "../page/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/home",
    element: <Home />,
  },

]);

export default router;