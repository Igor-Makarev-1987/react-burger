import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from '../../utils/api';
// логирование пользователя
export const loginUser = createAsyncThunk(
    "loginUser",
    async (email, password) => {
        const res = await login(email, password)
        console.log(res)
        return { ...res }
    }
);