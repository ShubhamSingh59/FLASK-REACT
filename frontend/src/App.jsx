import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './Navbar';
import Sports from './Pages/Sports';
import Insert from './Insert';
import Player from './Pages/Player';
import View1 from './Pages/View1';
import Login from './Pages/Login';
import Submit from './Pages/Submit';
function Home() {
  return <h2>Home</h2>;
}
function Users() {
  return <h2>Users</h2>;
}
function App() {
  const [count, setCount] = useState(0)
  const routes = [
    {
      path: '/',
      element: <Navbar/>
    },
    {
      path: '/home',
      element: <Navbar/>
    },
    {
      path: '/sports',
      element: <Sports/>
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/insert',
      element: <Insert />
    },
    {
      path: '/players',
      element: <Player />
    },
    {
      path: '/view1',
      element: <View1/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/login/submit',
      element: <Submit/>
    }
  ];

  const router = createBrowserRouter(routes);
  return (
    <>
     <RouterProvider router={router}/>
    </>
  
   
    
   
  )
}

export default App
