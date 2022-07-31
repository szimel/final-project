import { useNavigate } from "react-router-dom";


const Steps = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate('/signup', {replace: true})
  };

  const logIn = () => {
    navigate('/signin', {replace: true})
  };

  return (
    <div>
      <div className="d-flex flex-row pt-5 mt-5">
        <div className="col-md-3"></div>
        <div className="font"><strong>Step 1:</strong> <u onClick={() => signUp()}>Sign up</u> or <u onClick={() => logIn()}>Sign In</u>.</div>
      </div>
      <div className="d-flex flex-row mt-5">
        <div className="col-md-3"></div>
        <div className="font"><strong>Step 2:</strong> Create a category!</div>
        
      </div>
      <div className="d-flex flex-row mt-5">
        <div className="col-md-3"></div>
        <div className="font"><strong>Step 3:</strong> Search & organize away!</div>
      </div>
    </div>
  );
};

export default Steps