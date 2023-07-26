
import { useEffect } from 'react';
import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import MainNavbar from './components/MainNavbar';
import NavBar from './components/NavBar';
import Jumbtron from './components/jumbtron';

import { useDispatch, useSelector } from 'react-redux';
import { featchFeaturedProductsApi } from './State/Apis/ProductsApis/fetchfeaturedProduct';
import HomePage from './containers/HomePage/HomePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectectRoute';
import LoginPage from './containers/LoginPage/loginPage';


function App() {
  const dispatch = useDispatch();
  // const data = useSelector(state => state)
  // console.log(data);
  useEffect(() => {
    dispatch(featchFeaturedProductsApi())

  }, [])
  return (
    <>
      <NavBar />
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={<HomePage />} />} />
          <Route exact path='/login' element={<LoginPage />} />+
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
