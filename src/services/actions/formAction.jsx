import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkResponse } from "../../utils/checkResponse";
import { fetchWithRefresh } from "../auth";
import  { getUser, login, patchUserData, logout, resetPass, forgotPass } from "../../utils/api"
import { setUser, setIsAuthChecked } from "../slices/formSlice";


function isJwtExpiredError(smth) {
    return (
      typeof smth === "object" &&
      smth !== null &&
      smth.hasOwnProperty("message") &&
      smth.hasOwnProperty("success")
    );
}

export const userLogin = createAsyncThunk(
    "userLogin",
    async(email, password) => {
        return await login(email, password) 
    }
);

export const getUserParam = createAsyncThunk(
    "getUserParam",
    async () => {
        return getUser()
    }
)

export const checkUserAuth = createAsyncThunk(
      "checkUserAuth",
      async (_, {dispatch}) => {
        if(localStorage.getItem("accessToken")) {
            getUser().then( res => {
                // console.log(res.user)
                dispatch(setUser(res.user))
            })
            .catch( err => {
              //localStorage.removeItem("accessToken")
              //localStorage.removeItem("refreshToken")
            })
            .finally( () => dispatch(setIsAuthChecked(true)))
        } else {
          dispatch(setIsAuthChecked(true))
        }
      }
);

export const setUserData = createAsyncThunk(
    "setUserData",
    async (userInput, { rejectWithValue }) => {
        console.log(userInput)
        const commonPart = async () => {
          const res = (await patchUserData(userInput));
          return { ...res };
        };
        try {
          return await commonPart();
        } catch (e) {
          if (isJwtExpiredError(e) && e.message.includes("expired")) {
            const { accessToken } = await fetch(
              localStorage.getItem("refreshToken")
            );
            return await commonPart();
          } else {
            return rejectWithValue(e);
          }
        }
      }
)

export const logoutUser = createAsyncThunk(
    "logoutUser",
    async () => {
        const token = localStorage.getItem("refreshToken");
        return  await logout(token)

    }
);

export const resetPassword = createAsyncThunk(
    "resetPassword",
    (form) => {
        console.log(form)
        return  resetPass(form)
    }
)

export const forgotPassword = createAsyncThunk(
    "forgotPassword",
    async (email) => {
        return  await forgotPass(email)
            .then( res => {
                console.log(res)
                return res
            });
    }
);
