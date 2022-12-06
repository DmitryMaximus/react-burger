import {checkResponse} from "./check-response";
import {burgerApiUrl} from "./api-url";

export function getIngredients(func) {
    return fetch(`${burgerApiUrl}/ingredients`)
        .then(checkResponse).then(result => func(result.data))
}




