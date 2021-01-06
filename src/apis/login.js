import {
    service
} from "../configs/request.js";

/**
 * login
 */
export function login(param) {
    return service({
        url: `/user/botuLogin`,
        method: 'get',
        params: {
            ...param
        }
    })
}