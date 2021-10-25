import { SIGN_APP } from "./storeTypes"

export const signApp = (id: string) => ({
    type: SIGN_APP,
    payload: id
});