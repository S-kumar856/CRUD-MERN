import React from 'react';

import './App.css';
import User from './getUser/User';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from './addUser/addUser';
import UpdateUsers from './updateUser/UpdateUsers';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User />,
    },
    {
      path:'/add',
      element: <AddUser/>,
    },
    {
      path:'/update/:id',
      element:<UpdateUsers/>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router = {route}></RouterProvider>
    </div>
  )
}

export default App
