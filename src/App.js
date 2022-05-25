import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomTitle from './Pages/Shared/CustomTitle'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/Signup';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <div className='mb-auto'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={
            <CustomTitle title={"Home"}>
              <Home />
            </CustomTitle>
          }></Route>

          <Route path='/purchase/:id' element={
            <CustomTitle title={"Purchase"}>
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            </CustomTitle>
          }></Route>

          <Route path='/dashboard' element={
            <CustomTitle title={"Dashboard"}>
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            </CustomTitle>
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<MyReview></MyReview>}></Route>
            <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
            <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
            <Route path='manageProduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </Route>

          <Route path='/login' element={
            <CustomTitle title={"Login"}>
              <Login />
            </CustomTitle>
          }></Route>

          <Route path='/signup' element={
            <CustomTitle title={"Signup"}>
              <SignUp />
            </CustomTitle>
          }></Route>

          <Route path='/blogs' element={
            <CustomTitle title={"Blogs"}>
              <Blogs />
            </CustomTitle>
          }></Route>

          <Route path='*' element={
            <CustomTitle title={"Not Found"}>
              <NotFound></NotFound>
            </CustomTitle>
          }></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
