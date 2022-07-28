import BasicNavbar from "./basic-navbar"
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, newCategory } from "../actions/index";

const categorySchema = Yup.object().shape({
  category: Yup.string().required()
});


const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doesSomething = () => {
    dispatch(currentUser());
  }

  doesSomething();

  
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(categorySchema)
  });



  const auth = useSelector(state => state)
  console.log(auth);



  const handleFormSubmit = (data) => {
    dispatch(newCategory(data, () => {
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
          <label>New Category</label>
          <input
            className='form-control'
            {...register('category', {required: true})}>
          </input>
            {errors.email?.message}
        </div>
        <button className="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Category;