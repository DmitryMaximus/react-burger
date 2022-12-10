import {checkResponse} from "./check-response";
import {BURGER_API_URL} from "./api-url";

export function getIngredients(func) {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(checkResponse).then(result => func(result.data))
}

export function getOrder(func, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: body })
    };
    return fetch(`${BURGER_API_URL}/orders`, requestOptions)
        .then(checkResponse).then(result => func(result.order.number))
}


