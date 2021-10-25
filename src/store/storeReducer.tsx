import { SIGN_APP } from "./storeTypes";

const initialState = {
    signId: ''
}

const storeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_APP:
            return {
                ...state,
                signId: action.payload
            }
            break;
        default:
            return state;
    }
}

export default storeReducer;
