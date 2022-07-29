import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { currentUser, signup } from '../actions';
import BasicNavbar from './basic-navbar';

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(userSchema)
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    console.log(data);
    dispatch(signup(data, () => {
      navigate("/", { replace: true });
    }));
  };

  return (
    <div>
      <div>
        <BasicNavbar />
      </div>
      <div className='container pt-3'>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className='form-group row col-4'>
            <label>Email</label>
            <input
              className='form-control'
              {...register('email', {required: true})}>
            </input>
              {errors.email?.message}
          </div>

          <div className="form-group row col-4">
            <label>Password</label>
            <input 
              className="form-control"
              {...register('password', {required: true})}></input>
              {errors.password?.message}
          </div>

          <button className="btn btn-primary mt-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Signup;
