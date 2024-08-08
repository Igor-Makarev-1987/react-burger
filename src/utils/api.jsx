import { checkResponse } from "./checkResponse";

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