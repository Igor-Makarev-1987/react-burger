import { checkResponse } from "./checkResponse";
import { getCookie } from "../utils/cookieHandler";
import { fetchWithRefresh } from "../services/auth"
// import {userUpdateInput } from "../types/user";

const API_BASE = 'https://norma.nomoreparties.space/api';

export const fetchIngridientsRequest = async () => {
    return await fetch(`${API_BASE}/ingredients`)
        .then(checkResponse)
        .then(res => res)
};

export const submitOrder = async (ingredientIds) => {
    return await fetch(`${API_BASE}/orders`, {
        method: "POST",
        body: JSON.stringify({
        ingredients: ingredientIds,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(checkResponse).then(res => res)
}

export const forgotPass = ({email}) => {
  return fetch(`${API_BASE}/password-reset`, {
    method: "POST",
    body: JSON.stringify({
      email: email
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(checkResponse).then(res => res)
}

export const register = async ({email, name, password}) => {
  return await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      password: password
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(checkResponse).then(res => {
      let authToken;
      if (res.accessToken.indexOf('Bearer') === 0) {
        authToken = res.accessToken.split('Bearer ')[1];
      }
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("accessToken", authToken);
      return res;
    })
}

// export const register = async ({ email, password, name }) => {
//   return fetch(`${API_BASE}/auth/register`, {
//     method: "POST",
//     body: JSON.stringify({
//       email: email,
//       name: name,
//       password: password
//     }),
//     headers: {
//             "Content-Type": "application/json",
//           }
//   })
//     .catch(() => Promise.reject("Ошибка регистрации"))
//     .then(({ success, ...data }) => data);
// }

// export const fetchWithRefresh = async (url, options) => {
//   try {
//     const res = await fetch(url, options);
//     return await checkResponse(res);
//   } catch (err) {
//     if (err.message === "jwt expired") {
//       const refreshData = await refreshAccessTokenUser(); //обновляем токен
//       options.headers.authorization = refreshData.accessToken;
//       const res = await fetch(url, options); //повторяем запрос
//       return await checkResponse(res);
//     } else {
//       return Promise.reject(err);
//     }
//   }
// };

// export const refreshToken = () => {
//   return fetch(`${API_BASE}/auth/token`, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify({
//           token: localStorage.getItem("refreshToken"),
//       }),
//   }).then(res => checkResponse(res));
// };

// export const fetchWithRefresh = async (url, options) => {
//   try {
//       const res = await fetch(url, options);
//       return await checkResponse(res);
//   } catch (err) {
//       if (err.message === "jwt expired") {
//           const refreshData = await refreshToken(); //обновляем токен
//           if (!refreshData.success) {
//               return Promise.reject(refreshData);
//           }
//           localStorage.setItem("refreshToken", refreshData.refreshToken);
//           localStorage.setItem("accessToken", refreshData.accessToken);
//           options.headers.Authorization = refreshData.accessToken;
//           const res = await fetch(url, options); //повторяем запрос
//           return await checkResponse(res);
//       } else {
//           return Promise.reject(err);
//       }
//   }
// };

// получение данных пользователя
// убрать за ненадобностью
export const getUserData = async () => {
  return fetchWithRefresh(`${API_BASE}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken") ?? "",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
  .then(checkResponse)
}

// логирование пользователя
export const login = async({ email, password }) => {
  return await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password : password
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(checkResponse).then(res => {
      // let authToken;
      // if (res.accessToken.indexOf('Bearer') === 0) {
      //   authToken = res.accessToken.split('Bearer ')[1];
      // }
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("accessToken", res.accessToken);
    return res
  })
}

// получение данных пользователя не работает fetchWithRefresh
export const getUser = async () => {
  // return async function () {
      return await fetch(`${API_BASE}/auth/user`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("accessToken"),
          },
      }).then(checkResponse).then( res => {
        // console.log(res)
        return res;
      });
  // };
};

// обновление пользовательских данных
export const patchUserData = async (userUpdateInput) => {
  console.log(userUpdateInput)
  return fetch(`${API_BASE}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("accessToken"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(userUpdateInput),
  })
  .then(checkResponse).then(res => {
      console.log(res)
    return res
  })
}

// выход пользователя
export const logout = () => {
  return fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse).then(res => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      return res;
  })
}

export const resetPass = ({form}) => {
  return fetch(`${API_BASE}/password-reset/reset`, {
    method: "POST",
    body: JSON.stringify({
      form
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(checkResponse).then(res => res)
}

// export const passwordUpdate = (url, form) => {
//   return function (dispatch) {
//       fetch(url, {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//       })
//           .then(checkResponse)
//           .then(() => {
//               dispatch({
//                   type: UPDATE_FORM_SUCCESS,
//               });
//           })
//           .catch(() => {
//               dispatch({ type: UPDATE_FORM_FAILED });
//           });
//   };
// };
