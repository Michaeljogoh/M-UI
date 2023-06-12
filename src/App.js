import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Posts from './pages/Posts/Posts';
import Write from './pages/Write/Write';
import Login from './pages/Login/Login';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './pages/Register/Register';
import Loading from './Loading/Loading';




const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
 
    
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:< Home />

      },
      {
        path:'/write',
        element:< Write/>
     },
     {
      path:'/loading',
      element:< Loading/>
   },
     {
      path:'/posts',
      element:<Posts/>
    },
     {
      path:'/posts/:id',
      element:<SinglePost/>
    },
    ]
   
  }, 

  {
     path:'/register',
     element:< Register/>
  },
  {
    path:'/login',
    element:< Login/>
 },

])

function App() {
  return (
    <>
   {/* < Navbar /> */}
   {/* < Posts /> */}
    {/* < Write />  */}
    
    {/* < Register /> */}
    {/* < Login /> */}

    {/* < SinglePost /> */}

    < RouterProvider router={router} />
    
    </>
  );
}

export default App;
