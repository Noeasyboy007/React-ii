import React from 'react';
import ReactDOM from 'react-dom/client';
//Default Import
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestrauntMenu from './components/RestrauntMenu.js';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


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
        errorElement: <Error />
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: "restraunt/:id",
        element: <RestrauntMenu />
      }
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);