import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
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
      element: <Home/>
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/users',
      element: <Users />
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
