import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UnderConstruction } from "./components/constructionPage";
import { AppLayout } from "./components/AppLayout";
import { ErrorPage } from "./components/ErrorPage";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/SignUp";
import { ContactPage } from "./components/Layout/contact";
import { Recent } from "./components/Layout/Recent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path:"/",
            element:<Home/>
        },
      {
        path:"/settings",
        element: <UnderConstruction /> 
      },
      {
        path:"/contactPage",
        element: <ContactPage /> 
      },
      {
        path:"/activity",
        element: <UnderConstruction /> 
      },
      {
        path:"/recent",
        element: <Recent/> 
      },
      {
        path:"/login",
        element: <Login /> 
      },
      {
        path:"/signUp",
        element: <Signup /> 
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;