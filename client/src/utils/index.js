import Axios from 'axios';
const url = "http://localhost:5000";

export const LoginRequest = async (input) => {
  const data = {
    usuario: input
  }
  const res = await Axios.post(`${url}/login`, data)
  // const data = {
  //   name: input
  // }
  // if (loading === false) {
  //   setTimeout(() => {
  //     login(data)
  //   }, 1000)
  // }
  // }
  return res.data
  // console.log(data)
}
