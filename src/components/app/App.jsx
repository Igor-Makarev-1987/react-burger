import React, {useEffect, useState} from 'react';
import AppHeader from '../Header/AppHeader';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import HomePage from "../../pages/home/home";
import LoginPage from '../../pages/login/login';
import ProfilePage from '../../pages/profile/profile';
import RegistraionPage from '../../pages/registration/registration';
import ResetPasswordPage from '../../pages/resetPassword/resetPassword';
import { ForgotPasswordPage } from '../../pages/forgotPassword/forgotPassword';
import NotFound404  from "../../pages/notFound/notFound404";
import Modal from '../Modal/Modal';
import IngredientDetails from '../Ingridients/IngredientDetails';
import { OnlyAuth, OnlyUnAuth } from "../ProtectedRouteElement/ProtectedRouteElement";
import { checkUserAuth } from '../../services/actions/formAction';
import { loadAllIngredients } from '../../services/actions/ingridientAction';

function App() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(true);
  const navigate = useNavigate()
  const location = useLocation();
  const background = location.state && location.state.background;

  const closeModal = () => {
      setIsModal(false)
      navigate(-1)
  }

  // useEffect( () => {
  //   dispatch( loadAllIngredients() )
  // }, [dispatch])

  useEffect ( () => {
    dispatch( loadAllIngredients() )
    dispatch(checkUserAuth())
  }, [dispatch])
  return (
    <>
          <AppHeader />
          <Routes location={background || location}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path="/login"  element={<OnlyUnAuth component={<LoginPage />} />} />
            <Route path="/profile" element={<OnlyAuth component={<ProfilePage activeTab="PROFILE" />}/>} />
            <Route path="/register" element={<OnlyUnAuth component={<RegistraionPage />}/>} />
            <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />}/>} />
            <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />}/>} />
            <Route path='/*' element={<NotFound404 />}></Route>
            <Route path="/ingredients/:id" element={<IngredientDetails/>}></Route>
          </Routes>
        {/* </Router> */}

          {background && (
            <Routes>
              <Route path="/ingredients/:id" element={
                <Modal isOpen={isModal} onClose={closeModal}>                    
                    <IngredientDetails></IngredientDetails>
                </Modal>
              }></Route>
            </Routes>
          )}


    </>
  );
}

export default App;
