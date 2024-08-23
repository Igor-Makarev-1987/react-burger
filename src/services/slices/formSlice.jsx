import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserParam, setUserData, logoutUser, resetPassword } from "../actions/formAction";

const initialState = {
    resetFormFailed: false,
    resetFormSuccess: false,
    updateFormFailed: false,
    updateFormSuccess: false,
    registerFormSuccess: false,
    registerFormFailed: false,
    loginFormSuccess: false,
    loginFormFailed: false,
    userInfo: null,
    userInfoFailed: false,
    userInfoSuccess: false,
    isAuthChecked: false,
    logoutFormSuccess: false,
    logoutFormFailed: false,
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setUser: (state,action) => {
            // console.log(action.payload)
            state.userInfo = action.payload
        },
        setIsAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                // console.log(state)
                // console.log(action.payload.user)
                state.userInfo = action.payload.user
                state.isAuthChecked = true
                state.userInfoSuccess = true
                state.userInfoFailed = false
            })
            .addCase(userLogin.pending, (state) => {
                state.userInfoSuccess = false
            })
            .addCase(userLogin.rejected, (state) => {
                state.userInfoSuccess = false
                state.userInfoFailed = true
            })
            // получение параметров пользователя
            .addCase(getUserParam.fulfilled, (state, action) => {
                // console.log(action.payload.user)
                state.userInfo = action.payload.user
                // console.log(state.userInfo)
                state.userInfoSuccess = true
                state.userInfoFailed = false
            })
            .addCase(getUserParam.pending, (state) => {
                state.userInfoSuccess = true
            })
            .addCase(getUserParam.rejected, (state, action) => {
                state.userInfoSuccess = false
                state.userInfoFailed = true
            })
            // редактирование параметров пользователя
            .addCase(setUserData.fulfilled, (state, action) => {
                console.log(action.payload)
                state.userInfo = action.payload.user
                state.isAuthChecked = true
                state.userInfoSuccess = true
            })
            .addCase(setUserData.pending, (state) => {
                state.userInfoSuccess = false
            })
            .addCase(setUserData.rejected, (state) => {
                state.userInfoSuccess = false
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.userInfo = null
                state.isAuthChecked = true
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.updateFormFailed = true
            })
            .addCase(resetPassword.rejected, (state) => {
                state.updateFormFailed = false
            })
    }

})

export const {
    setUser,
    setIsAuthChecked
} = formSlice.actions;
  
export default formSlice.reducer;
