 import './App.css';
import Home from './Home';
import PrivateArea from './PrivateArea';
import Navbar from './Navbar';
import Cart from './Cart';
import Login from './Login';
import CartDetails from './CartDetails';
import ProtectedRoute from './ProtectedRoute';
import {createBrowserRouter,createRoutesFromElements,Route,Outlet,Link, RouterProvider} from 'react-router-dom'







function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path='/' element={<Root></Root>}>

                <Route path='/' index element={<Home></Home>}></Route>
                <Route path="/login" element={ <Login></Login>} />

              <Route element={<ProtectedRoute path={'specific-path'}/> }>    
                  <Route path='/area'   element={<PrivateArea></PrivateArea>}></Route>
                  <Route path='/cart'   element={<Cart></Cart>}></Route>
                  <Route path='/cart/:id' element={<CartDetails />} />
              </Route>
                 <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Route>
      )
  )

  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;




const Root = () => { 
  const id = 0
return(
  <>
  <div>
    <Navbar></Navbar>
        <div className='links'>
            <Link to='/'>home</Link>
            <Link to='/area'>area</Link>
            <Link to='/cart'>cart</Link>
            <Link to='/login'>login</Link>

             
            <Link to={`/cart/${id}`}>cart details</Link>
        </div>
    

  </div>


  <div>
    <Outlet></Outlet>
  </div>
  </>
)
}