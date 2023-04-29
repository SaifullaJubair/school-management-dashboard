const { createBrowserRouter } = require("react-router-dom");
const { default: UnKnownRoutes } = require("../UnKnownRoutes/UnKnownRoutes");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");
const { default: Register } = require("../../Pages/Register/Register");
const { default: Login } = require("../../Pages/Login/Login");

const router = createBrowserRouter([
   {

      path: '/',
      element: <Main></Main>,
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },

      ]
   },
])