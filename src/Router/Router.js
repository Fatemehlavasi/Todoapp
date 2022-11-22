import { createBrowserRouter} from "react-router-dom";
import Home from "../componentes/Home/Home";
import SinglePage from "../Page/SinglePage"
 const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />
    },
    {
        path: "/AddContact",
        element:  <SinglePage />
      },
  
      {
        path: "/updateContact/:ContactId",
        element: <SinglePage/>,
      },
    
  ]);

  export default router


