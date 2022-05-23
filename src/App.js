import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomTitle from './Pages/Shared/CustomTitle'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';

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

          <Route path='/login' element={
            <CustomTitle title={"Login"}>
              <Login />
            </CustomTitle>
          }></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
