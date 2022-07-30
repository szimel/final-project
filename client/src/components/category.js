import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../actions";


const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
    }, []);
  const category = useSelector(state => state.currentUser);
  console.log(category);
};

export default Category;