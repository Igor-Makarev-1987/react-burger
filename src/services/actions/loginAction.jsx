import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from '../../utils/api';
import { getUserData } from "../../utils/api";
import { setUser, setIsAuthChecked } from "../slices/authSlice";
// логирование пользователя
export const loginUser = createAsyncThunk(
    "loginUser",
    async (email, password) => {
        const res = await login(email, password)
        console.log(res)
        return { ...res }
    }
);

// export const checkUserAuth = createAsyncThunk(
//     "checkUserAuth",
//     async (_, {dispatch}) => {
//       // console.log(dispatch)
//       // console.log(localStorage.getItem("accessToken"))
//       // console.log(localStorage.getItem("refreshToken"))
//       if(localStorage.getItem("accessToken")) {
//         // console.log(localStorage.getItem("accessToken"))
//         getUserData().then( res => {
//           // console.log(res)
//           dispatch(setUser(res.user))
//         })
//           .catch( err => {
//             // console.log(err)
//             localStorage.removeItem("accessToken")
//             localStorage.removeItem("refreshToken")
//           })
//           .finally( () => dispatch(setIsAuthChecked(true)))
//       } else {
//         dispatch(setIsAuthChecked(true))
//       }
//     }
//   );