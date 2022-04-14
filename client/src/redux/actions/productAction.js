import * as actions from "../constants/productContstants"
import axios from "axios"
import { logout } from "./userAction"


// Untuk Create Product
export const createProduct = (dataProduct) => async (dispatch, getState) => {
    try {
      dispatch({ type: actions.PRODUCT_CREATE_REQUEST })
  
      const {
        userLogin: {userInfo},
      } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.post(`http://localhost:5600/api/products/`, dataProduct, config);
  
      dispatch({ type: actions.PRODUCT_CREATE_SUCCESS })
    } catch (error) {
      const message = 
          error.response && error.response.data.message
          ? error.response.data.message
          : error.response
  
      if(message === "not authorized, no token"){
        dispatch(logout())
      }
      dispatch({
        type: actions.PRODUCT_CREATE_FAIL,
        payload: message
      })
    }
  }