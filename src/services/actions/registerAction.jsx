import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from '../../utils/api';

export const registerUser = createAsyncThunk(
    "registerUser",
    async (email, password, name) => {
        return  await register(email, password, name)
            .then( res => {
                console.log(res)
                return res
            });
    }
); 