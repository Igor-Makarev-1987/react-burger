import React, {useEffect, useState} from 'react';
import loginStyle from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Input,
  } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from '../../services/actions/formAction';

function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const user = useSelector((state) => state.user.user);
    const userIsLoggedIn = useSelector( (state) => state.auth.userIsLoggedIn);
    // console.log(user);
    // console.log(userIsLoggedIn);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin({ email, password }));
    };
  
    return (
      <>
        <form className={loginStyle.main} onSubmit={handleSubmit}>
        <p className="text text_type_main-medium">Вход</p>
        <Input
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />
        <Input
          type={isPasswordShown ? "text" : "password"}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name={"password"}
          error={false}
          icon={isPasswordShown ? "HideIcon" : "ShowIcon"}
          onIconClick={() => setIsPasswordShown(!isPasswordShown)}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />
        <Button
          extraClass={"mt-6 mb-20"}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Войти
        </Button>
        <p className="text text_type_main-small">
          <span className={loginStyle.text_grayed}>
            Вы - новый пользователь?{" "}
          </span>
          <Link className={loginStyle.text_blued} to="/register">
            Зарегистрироваться
          </Link>
        </p>
        <p className="mt-4 text text_type_main-small">
          <span className={loginStyle.text_grayed}>Забыли пароль? </span>
          <Link
            className={loginStyle.text_blued}
            to="/forgot-password"
          >
            Восстановить пароль
          </Link>
        </p>
      </form>
      </>
    );
}
  
export default LoginPage;