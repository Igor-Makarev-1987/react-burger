import {
    Input,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useEffect, useState } from "react";
  import resetPasswordStyle from "./resetPassword.module.css";
  import { Link, useHistory, useNavigate } from "react-router-dom";

  import { useDispatch, useSelector } from "react-redux";
  import { resetPassword } from "../../services/actions/resetPassAction";

  
  function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({ password: "", token: "" });
    const changeInputValue = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
  
    const handleSumbit = async (e) => {
      e.preventDefault();
      dispatch(resetPassword({password, token}))
      navigate("/", { replace: true});
    };
  
    return (
      <>
        <form className={resetPasswordStyle.main} onSubmit={handleSumbit}>
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <Input
              name="password"
              type="password"
              icon={"ShowIcon"}
              placeholder="Введите новый пароль"
              extraClass="mt-6"
              onChange={changeInputValue}
              value={formValues.password}
          />
          <Input
              name="token"
              type="text"
              extraClass="mt-6"
              placeholder="Введите код из письма"
              value={formValues.token}
              onChange={changeInputValue}
          />
          <Button
            extraClass={"mt-6 mb-20"}
            htmlType="submit"
            type="primary"
            size="medium"
          >
            Сохранить
          </Button>
          <p className="mt-4 text text_type_main-small">
            <span className={resetPasswordStyle.text_grayed}>
              Вспомнили пароль?{" "}
            </span>
            <Link
              className={resetPasswordStyle.text_blued}
              to="/login"
            >
              Войти
            </Link>
          </p>
        </form>
      </>
    );
  };

  export default ResetPasswordPage;
  