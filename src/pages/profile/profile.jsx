import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";

import { ProfileInputs } from "../../components/ProfileInput/ProfileInput";
import { logoutUser } from "../../services/actions/logoutUserAction";
import profileStyle from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataReducer, setUserDataReducer } from "../../services/slices/userSlice";
import { getUserParam } from "../../services/actions/formAction";
import { setUserData } from "../../services/actions/formAction";

function ProfilePage({ activeTab }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [dataIsChanged, setDataIsChanged] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const user1 = useSelector((state) => state.user.user); //не нужно
    const user = useSelector( (state) => state.form.userInfo);
    useEffect(() => {
        // dispatch(getUserDataReducer());
    }, [dispatch]);

    const setInitialState = useCallback(() => {
        if (user && user.name && user.email) {
          setName(user.name);
          setLogin(user.email);
          setPassword("");
          setDataIsChanged(false);
        }
    }, [user]);

    useEffect(() => {
        setInitialState();
    }, [setInitialState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataIsChanged) {
            dispatch(
                setUserData({
                    name,
                    email: login,
                    password,
                })
                );
          } else {
            alert("Data was not changed!");
          }
    };

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/login', {replace: true});
    };

    useEffect( () => {
        dispatch(getUserParam())
    }, [dispatch])

      const cancelNewData = () => {
        setInitialState();
      };

      const PROFILE = "PROFILE";
      const ORDERS = "ORDERS";

    return (
        <>
           <form className={profileStyle.main} onSubmit={handleSubmit}>
                <div className={profileStyle.main__columnsWrapper}>
                <div className={profileStyle.main__columnLeft}>
                    <p
                    className={`${
                        profileStyle.main__columnLeft__text
                    } text text_type_main-medium ${
                        activeTab === PROFILE ? "" : "text_color_inactive"
                    }`}
                    >
                    <Link to="/profile">Профиль</Link>
                    </p>
                    <p
                    className={`${
                        profileStyle.main__columnLeft__text
                    } text text_type_main-medium ${
                        activeTab === ORDERS ? "" : "text_color_inactive"
                    }`}
                    >
                    <Link to="/profile/orders">
                        История заказов
                    </Link>
                    </p>
                    <button
                        onClick={handleLogout}
                        className={`${profileStyle.logout_btn} text text_type_main-medium`}
                    >
                        Выход
                    </button>
                    {activeTab === PROFILE && (
                    <span
                        className={`text text_type_main-small text_color_inactive mt-30`}
                    >
                        В этом разделе вы можете изменить свои персональные данные
                    </span>
                    )}
                </div>
                <div className={profileStyle.main__columnRight}>
                    {activeTab === PROFILE ? (
                    <>
                        <ProfileInputs
                        name={name}
                        setName={setName}
                        login={login}
                        setLogin={setLogin}
                        password={password}
                        setPassword={setPassword}
                        setDataIsChanged={setDataIsChanged}
                        />
                        <div
                        className={`mt-15 ${
                            dataIsChanged
                            ? `${profileStyle.footer__btns}`
                            : `${profileStyle.footer__btns_hidden}`
                        }`}
                        >
                        <div className={`${profileStyle.footer__btnsWrapper}`}>
                            <Button
                            onClick={cancelNewData}
                            htmlType="button"
                            type="secondary"
                            size="medium"
                            >
                            Отменить
                            </Button>
                            <Button htmlType="submit" type="primary" size="medium">
                            Сохранить
                            </Button>
                        </div>
                        </div>
                    </>
                    ) : (
                        ""
                    )}
                </div>
                </div>
            </form> 
        </>
    )
} 

export default ProfilePage;