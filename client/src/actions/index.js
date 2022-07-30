import axios from "axios";
import { AUTH_USER, AUTH_ERROR, CURRENT_USER, USER_CATEGORY, VIDEO_ID, VIDEOS, CATEGORY_ID } from './types'


const ROOT_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
const SERVER_URL = 'http://localhost:5000';


//add specific category id to state
export const findSpecificCategory = (id, i, callback) => dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  };
  axios.post(`${SERVER_URL}/category`, {categoryId: id, categoryArray: i}, config)
  .then(function (response) {
    dispatch({ type: CATEGORY_ID, payload: response.data });
    callback();
  })
  .catch(function (error) {
    console.log(error);
  });
}

//add video id to state
export const videoId = (id, Video) => dispatch => {
  axios.post(`${SERVER_URL}/videoId`, {videoId: id})
  .then(function (response) {
    dispatch({ type: VIDEO_ID, payload: response.data });
  })
}

//add video to category
export const addToCategory = (id, video, i, callback) => dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  }
  const data = {
    id: id,
    video: video,
    categoryArray: i,
  };
  debugger;
  axios.post(`${SERVER_URL}/video`, { data }, config)
  .then(function (response) {
    dispatch({ type: USER_CATEGORY, payload: response.data });
    callback();
  })
  .catch(function (error) {
    console.log(error);
  });
};

//make new category
export const newCategory = (data, callback) => dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  }
  const urlFormat = encodeURIComponent(data.category)
  const url = `${SERVER_URL}/category${urlFormat}`
  console.log(url);
  axios.post(url, { id: callback }, config)
  .then(function (response) {
    dispatch({ type: USER_CATEGORY, payload: response.data });
    callback();
  })
  .catch(function (error) {
    console.log(error);
  });
};

//search 
export const videoSearch = (search) => dispatch => {
  const url = `${ROOT_URL}${search}&type=video&key=AIzaSyBKm9bJHd2C1dRZtHdDQQsF4Ycp_sjHqX4`
  console.log(url);
  axios.get(url, { searched: search})
  .then(function (response) {
    dispatch({type: VIDEOS, payload: response.data})
  });
};

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

// export const fetchUser = () => dispatch => {
//   const config = {
//     headers: {
//       Authorization: 'Bearer ' + localStorage.getItem('token'),
//     }
//   };

//   axios.get(
//     `${SERVER_URL}/auth/current_user`,
//     config
//   ).then(function (response) {
//     dispatch({ type: CURRENT_USER, payload: response.data });
//     localStorage.setItem('token', response.data.token);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };

export const currentUser = () => dispatch => {

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
  }

  axios.get(
    `http://localhost:5000/auth/current_user`,
    config
    ).then(function (response) {
      dispatch({ type: CURRENT_USER, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};