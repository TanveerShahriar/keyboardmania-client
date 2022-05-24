import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomTitle from './Pages/Shared/CustomTitle'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/Signup';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
