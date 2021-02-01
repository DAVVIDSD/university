import Axios from 'axios';
import {LOGIN} from './actionsType';
const url = 'http://localhost:5000'

export const Authlogin = (input) => (dispatch) => {
  const data = {
    usuario: input
  }
  Axios.post(`${url}/login`, data)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data
      })
    })
}

export const GoogleAuth = (input) => async (dispatch) => {
  const users = await Axios.get(`${url}/usuarios`)
  let exist;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === input) {
      exist = true
      return;
    }
  }
  if(exist) { 
    const data = {
      usuario: input
    }
    const res = await Axios.post(`${url}/login`, data)
    dispatch({
      type: LOGIN,
      payload: res.data
    })
  } else {
    //TODO: Añadir crear usuario, y login de usuario
    // Axios.post(`${url}/`)
  }
}
