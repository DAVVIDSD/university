import Axios from "axios";
import { LOGIN, CREATE_USER } from "./actionsType";
const url = "http://localhost:5000";

const comprobate = (users, email) => {
  for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
    if (users[i].email === email) {
      return true;
    }
  }
};
export const Authlogin = (data) => (dispatch) => {
  // const data = {
  //   usuario: input
  // }
  Axios.post(`${url}/login`, data).then((res) => {
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  });
};

export const GoogleAuth = (data) => async (dispatch) => {
  const res = await Axios.get(`${url}/usuarios`);
  const exist = comprobate(res.data, data.email);
  // console.log(users);
  if (exist) {
    // return console.log('existe')
    const res = await Axios.post(`${url}/login`, data);
    console.log('existe')
    return dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } else {
    //TODO: Añadir crear usuario, y login de usuario
    const json = JSON.stringify(data);
    const create = await Axios.post(`${url}/usuarios`, data);
    dispatch({
      type: CREATE_USER,
    });
    console.log(create);
  }
  console.log(data);
};
