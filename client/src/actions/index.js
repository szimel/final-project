import axios from "axios";
import { AUTH_USER, AUTH_ERROR, CURRENT_USER } from './types'


const ROOT_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
const SERVER_URL = 'http://localhost:5000';


export const VIDEOS = 'VIDEOS'

// //get users categories
// export const categories = () => {
//   const request = axios.get(
//     `${SERVER_URL}/category`
//   )
//   return {
//     type: AUTH_USER,
//     payload: response.data
//   };
// };

//make new category
export const newCategory = (data) => dispatch => {
  const urlFormat = encodeURIComponent(data.category)
  const url = `${SERVER_URL}/category:${urlFormat}`
  console.log(url);
  axios.post(url, {category: data.category})
  
  // .then(function (response) {
  //   dispatch({type: CATEGORIES, payload: response.data})
  // })
  // .then(function (response) {
  //   dispatch({ type: CATEGORIES, payload: response.data })
  // });
}

export const videoSearch = (search) => dispatch => {
  const url = `${ROOT_URL}${search}&type=video&key=AIzaSyBKm9bJHd2C1dRZtHdDQQsF4Ycp_sjHqX4`
  console.log(url);
  axios.get(url)
  .then(function (response) {
    dispatch({type: VIDEOS, payload: response.data})
  })
}

export const signup = (formProps, callback) => dispatch => {
  axios.post(
    `${SERVER_URL}/auth/signup`,
    formProps
  ).then(function (response) {
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    callback();
  })
  .catch(function (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  });
};

export const signin = (formProps, callback) => dispatch => {
  axios.post(
    `${SERVER_URL}/auth/signin`,
    formProps
  ).then(function (response) {
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    callback();
  })
  .catch(function (error) {
    dispatch({ type: AUTH_ERROR, payload: error });
  });
};

export const signout = (callback) => dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: AUTH_USER, payload: '' });
  callback()
};

export const fetchUser = () => dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  };

  axios.get(
    `${SERVER_URL}/auth/current_user`,
    config
  ).then(function (response) {
    debugger;
    dispatch({ type: CURRENT_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const currentUser = () =>  {
  const request = axios.get(`http://localhost:5000/auth/current_user`)

  return {
    type: CURRENT_USER,
    payload: request
  }
};