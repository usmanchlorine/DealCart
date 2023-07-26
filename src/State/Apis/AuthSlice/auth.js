

import axios from "axios";
import { login } from "../../Slices/authSlices";


const LoginUser = (userCredentials) => {

    return async dispatch => {
        const response = await axios.post('https://dummyjson.com/auth/login', userCredentials)
        const data = await response.data
        dispatch(login(data))

    }


}


export { LoginUser }