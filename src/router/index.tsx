import { createBrowserRouter } from "react-router-dom";

import {Home} from "../page/Home/Home";
import {Onde_estamos} from "../page/ondeEstamos/ondeEstamos";
import {Lideranca} from "../page/lideranca/lideranca";
import {CtteMidia} from "../page/CtteMidia/CtteMidia";
import {DizimoseOfertas} from "../page/Dizimos_e_Ofertas/Dizimos_e_Ofertas";
import {Nossa_historia} from "../page/nossa_historia/nossa_historia";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/home",
    element: <Home />,
  },{
    path: "/ondeEstamos",
    element: <Onde_estamos/>,
  },{
    path: "/lideranca",
    element: <Lideranca/>,
  },{
    path: "/cttemidia",
    element: <CtteMidia/>,
  },{
    path: "/dizimoseofertas",
    element: <DizimoseOfertas/>,
  },{
    path: "/nossa_historia",
    element: <Nossa_historia/>,
  },

]);

export default router;