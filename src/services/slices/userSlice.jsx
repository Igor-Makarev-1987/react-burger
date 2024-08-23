import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWithRefresh } from "../auth"
import { getUserData, patchUserData } from "../../utils/api";
import { setCookie } from "../../utils/cookieHandler";
import { logoutUser } from "../actions/logoutUserAction";
import { setIsAuthChecked, setUser } from "./authSlice";

const initialState = {
    user: null,
    userIsLoading: false,
}

function isJwtExpiredError(smth) {
    return (
      typeof smth === "object" &&
      smth !== null &&
      smth.hasOwnProperty("message") &&
      smth.hasOwnProperty("success")
    );
}

export const getUserDataReducer = createAsyncThunk(
    "getUserData",
    async (_, { rejectWithValue }) => {
      const commonPart = async () => {
        const res = (await getUserData());
        console.log(res)
        return { ...res };
      };

      try {
        return await commonPart();
      } catch (e) {
        if (isJwtExpiredError(e) && e.message.includes("expired")) {
          const { accessToken } = await fetchWithRefresh(
            localStorage.getItem("refreshToken")
          );
          // setCookie("accessToken", accessToken);
          return await commonPart();
        } else {
          return rejectWithValue(e);
        }
      }
    }
);

export const setUserDataReducer = createAsyncThunk(
    "setUserData",
    async (userInput, { rejectWithValue }) => {
      const commonPart = async () => {
        const res = (await patchUserData(userInput));
        return { ...res };
      };
      try {
        return await commonPart();
      } catch (e) {
        if (isJwtExpiredError(e) && e.message.includes("expired")) {
          const { accessToken } = await fetchWithRefresh(
            localStorage.getItem("refreshToken")
          );
          // setCookie("accessToken", accessToken);
          return await commonPart();
        } else {
          return rejectWithValue(e);
        }
      }
    }
);

// export const checkUserAuth = createAsyncThunk(
//   "checkUserAuth",
//   async (_, {dispatch}) => {
//     // console.log(dispatch)
//     // console.log(localStorage.getItem("accessToken"))
//     if(localStorage.getItem("accessToken")) {
//       // console.log(localStorage.getItem("accessToken"))
//       getUserData().then( res => {
//         // console.log(res)
//         dispatch(setUser(res.user))
//       })
//         .catch( err => {
//           // console.log(err)
//           localStorage.removeItem("accessToken")
//           localStorage.removeItem("refreshToken")
//         })
//         .finally( () => dispatch(setIsAuthChecked(true)))
//     } else {
//       dispatch(setIsAuthChecked(true))
//     }
//   }
// );



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      // setUser: (state,action) => {
      //     state.user = action.payload
      // },
      // setIsAuthChecked: (state, action) => {
      //     state.isAuthChecked = action.payload
      // }
  },
  // selectors: {
  //     getIsAuthChecked: (state) => state.isAuthChecked,
  //     getUser: (state) => state.user
      
  // },

    extraReducers: (builder) => {
        builder
        // get user data
          .addCase(getUserDataReducer.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.userIsLoading = false;
            state.userIsLoaded = true;
          })
          .addCase(getUserDataReducer.pending, (state) => {
            state.userIsLoading = true;
            state.userIsLoaded = false;
          })
          .addCase(getUserDataReducer.rejected, (state, action) => {
            state.userIsLoading = false;
            state.userIsLoaded = false;
          })
          // set user data
          .addCase(setUserDataReducer.fulfilled, (state, action) => {
            // console.log(action.payload.user)
            state.user = action.payload.user;
            state.userIsLoaded = true;
            state.userIsLoading = false;
            alert("User data is successfully updated");
          })
          .addCase(setUserDataReducer.pending, (state) => {
            state.userIsLoaded = false;
            state.userIsLoading = true;
          })
          .addCase(setUserDataReducer.rejected, (state, action) => {
            state.userIsLoaded = false;
            state.userIsLoading = false;
            alert(action.error.message);
          })
          .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.userIsLoaded = false;
          });
    }

})

export const {
  // setUser,
  // setIsAuthChecked
} = userSlice.actions;
  
export default userSlice.reducer;