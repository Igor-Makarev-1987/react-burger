import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetPass } from '../../utils/api';

export const resetPassword = createAsyncThunk(
    "resetPassword",
    async (form) => {
        return await resetPass(form)
            .then( res => {
                console.log(res)
                return res
            });
    }
);