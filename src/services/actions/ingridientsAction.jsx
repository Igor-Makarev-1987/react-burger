// import {fetchIngridientsRequest} from '../../utils/api';
// import {v4 as uidd} from 'uuid'

// export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
// export const CURRENT_INGRIDIENTS = 'CURRENT_INGRIDIENTS';
// export const GET_INGRIDIENTS_REQUEST = 'GET_INGRIDIENTS_REQUEST';
// export const GET_INGRIDIENTS_SUCCESS = 'GET_INGRIDIENTS_SUCCESS';
// export const GET_INGRIDIENTS_FAILED = 'GET_INGRIDIENTS_FAILED';


// export const addIngridient = (ingridient) => ({
//     type: ADD_INGRIDIENT,
//     payload: {...ingridient, id:uidd}
// })

// export const getIngridients = () => (dispatch) => {
//     dispatch({type: GET_INGRIDIENTS_REQUEST});
//     fetchIngridientsRequest()
//       .then(res =>
//           dispatch({type: GET_INGRIDIENTS_SUCCESS, payload: res})
//       )
//       .catch(e => {
//           dispatch({type: GET_INGRIDIENTS_FAILED, payload: e.message})
//       })
// };

