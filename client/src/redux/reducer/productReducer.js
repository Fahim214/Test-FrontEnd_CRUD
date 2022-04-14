import * as actions from "../constants/productContstants"


// for Product Create
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.PRODUCT_CREATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case actions.PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }
        case actions.PRODUCT_CREATE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}