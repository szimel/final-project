import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer  from "./reducers";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Category from "./components/new-category";
import UserCategory from './components/category'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

document.body.style='background: #FFFDD0;'

render (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
        </Route>
        <Route path="signup" element={<Signup />}/>
        <Route path="signin" element={<Signin />} />
        <Route path='new-category' element={<Category />} />
        <Route path='category' element={<UserCategory />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
)