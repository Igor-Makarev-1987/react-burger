import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "../actions/forgotPassAction";
import { resetPassword } from "../actions/resetPassAction";
import { registerUser } from "../actions/registerAction";
import { deleteCookie, setCookie } from "../../utils/cookieHandler";
import { logoutUser } from "../actions/logoutUserAction";
import { loginUser } from "../actions/loginAction";

const initialState = {
    user: null,
    userIsLoggedIn: false,
    userIsRegistered: false,
    userForgotPswrdEmailSent: false,
    userIsPasswordReset: false,
    userPassword: "",
    isAuthChecked: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.user = action.payload
        },
        setIsAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload
        }
    },
    selectors: {
        getIsAuthChecked: (state) => state.isAuthChecked,
        getUser: (state) => state.user
        
    },
    
    extraReducers: (builder) => {
        builder
        // forgot pswrd
            .addCase(forgotPassword.fulfilled, (state) => {
                state.forgotPswrdIsLoading = false;
                state.userForgotPswrdEmailSent = true;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.forgotPswrdIsLoading = true;
                state.userForgotPswrdEmailSent = false;
                state.userIsLoggedIn = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.userForgotPswrdEmailSent = false;
                state.forgotPswrdIsLoading = false;
                state.error =
                "User forgot password check failed, please contact support.";
            })
        // reset pswrd
            .addCase(resetPassword.fulfilled, (state) => {
                state.resetPswrdIsLoading = false;
                state.userIsPasswordReset = true;
            })
            .addCase(resetPassword.pending, (state) => {
                state.resetPswrdIsLoading = true;
                state.userIsPasswordReset = false;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.resetPswrdIsLoading = false;
                state.userIsPasswordReset = false;
                state.error = "User password reset has failed, please contact support.";
            })
        // user register
            .addCase(registerUser.fulfilled, (state, action) => {
                deleteCookie("accessToken");
                setCookie("accessToken", action.payload.accessToken);
                // localStorage.setItem("refreshToken", action.payload.refreshToken);
                // localStorage.setItem("accessToken", action.payload.accessToken);
                state.isAuthChecked = true;
                // state.userIsLoading = false;
                state.userIsRegistered = true;
            })
            .addCase(registerUser.pending, (state) => {
                state.userIsLoading = true;
                state.userIsRegistered = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                alert(action.error.message);
                state.userIsLoading = false;
                state.userIsRegistered = false;
                state.error = "User registration failed, please contact support.";
            })
            // logout user
            .addCase(logoutUser.fulfilled, (state) => {
                state.userLogoutIsLoading = false;
                state.userIsLoggedIn = false;
                state.user = null
                // deleteCookie("accessToken");
                alert("Logout is done. Redirecting to the login page");
            })
            .addCase(logoutUser.pending, (state) => {
                state.userLogoutIsLoading = true;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                alert(action.error.message);
                state.userLogoutIsLoading = false;
                alert(action.error.message);
            })
            // login user
            // .addCase(loginUser.fulfilled, (state, action) => {
            //     deleteCookie("accessToken");
            //     setCookie("accessToken", action.payload.accessToken);
            //     // localStorage.setItem("refreshToken", action.payload.refreshToken);
            //     // localStorage.setItem("accessToken", action.payload.accessToken);
            //     // state.userIsLoading = false;
            //     state.userIsLoggedIn = true;
            //     state.isAuthChecked = true;
            //     state.user = action.payload.user
            //     console.log(state.user)
            // })
            // .addCase(loginUser.pending, (state) => {
            //     // state.userIsLoading = true;
            //     state.userIsLoggedIn = false;
            // })
            // .addCase(loginUser.rejected, (state, action) => {
            //     // state.userIsLoading = false;
            //     state.userIsLoggedIn = false;
            //     alert(action.error.message);
            //     state.error = "User login failed, please contact support.";
            // })
    }
})

export const {
    setUser,
    setIsAuthChecked
} = authSlice.actions;
  
export default authSlice.reducer;