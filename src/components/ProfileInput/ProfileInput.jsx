import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
// import { selectUserData } from "../../redux/slices/user";
// import { useAppSelector } from "../../redux/store";
import profileInputStyle from "./profileInput.module.css";
import { useDispatch, useSelector } from "react-redux";

export const ProfileInputs = ({
  name,
  setName,
  login,
  setLogin,
  password,
  setPassword,
  setDataIsChanged,
}) => {
  const nameInputRef = useRef(null);
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [isNameInputActive, setIsNameInputActive] = useState(false);
  const [isLoginInputActive, setIsLoginInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  const dispatch = useDispatch();
//   const user = useAppSelector(selectUserData);

  const setAllInputsInactive = useCallback(() => {
    setIsNameInputActive(false);
    setIsLoginInputActive(false);
    setIsPasswordInputActive(false);
  }, []);

//   useEffect(() => {
//     setAllInputsInactive();
//   }, [setAllInputsInactive, user]);

  return (
    <>
      <Input
        ref={nameInputRef}
        disabled={isNameInputActive ? false : true}
        type={"text"}
        placeholder={"Name"}
        onChange={(e) => {
          setName(e.target.value);
          setDataIsChanged(true);
        }}
        value={name}
        icon={"EditIcon"}
        onIconClick={() => {
          setIsNameInputActive(!isNameInputActive);
          setTimeout(
            () =>
              nameInputRef &&
              nameInputRef.current &&
              nameInputRef.current.focus(),
            0
          );
        }}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <Input
        ref={loginInputRef}
        disabled={isLoginInputActive ? false : true}
        type={"text"}
        placeholder={"Login"}
        onChange={(e) => {
          setLogin(e.target.value);
          setDataIsChanged(true);
        }}
        value={login}
        icon={"EditIcon"}
        onIconClick={() => {
          setIsLoginInputActive(!isLoginInputActive);
          setTimeout(
            () =>
              loginInputRef &&
              loginInputRef.current &&
              loginInputRef.current.focus(),
            0
          );
        }}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1 mt-6"
      />
      <Input
        ref={passwordInputRef}
        disabled={isPasswordInputActive ? false : true}
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => {
          setPassword(e.target.value);
          setDataIsChanged(true);
        }}
        value={password}
        icon={"EditIcon"}
        onIconClick={() => {
          setIsPasswordInputActive(!isPasswordInputActive);
          setTimeout(
            () =>
              passwordInputRef &&
              passwordInputRef.current &&
              passwordInputRef.current.focus(),
            0
          );
        }}
        error={false}
        name={"password"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1 mt-6"
      />
    </>
  );
};