import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT
} from './types';



//register user
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }

    const body = JSON.stringify({name, mail, password});

    try{

        const res = await axios.post('/api/users', body, config);


        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }catch (err) {

        const error = err.response.data.errors;

        if(error){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL,
        })
    }

} 
 