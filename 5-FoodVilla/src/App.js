import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
//Default Import
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './utils/Error.js';
import RestrauntMenu from './components/RestrauntMenu.js';
import Profile from './components/Profile';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// LAzy  Loadiing Component
const InstaDelivery = lazy(() => import('./components/InstaDelivery.js'))

//AppLayout component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile />

          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />
      },
      {
        path: "restraunt/:resId",
        element: <RestrauntMenu />,
        errorElement: <Error />
      },
      {
        path: "/instadelivery",
        element: <InstaDelivery />,
      }
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);