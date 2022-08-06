import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const Steps = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate('/signup', {replace: true})
  };

  const logIn = () => {
    navigate('/signin', {replace: true})
  };

  return (
    <div className='row mt-5 pt-5 '>
      <div className="mx-auto col-md-5 color edges p-4 ">
        <ReactPlayer 
          width='100%'
          height='100%'
          url='video/Showcase.mp4'
          controls={true}
        />
        {/* <div className="font">
          <strong>Step 1:</strong> <u onClick={() => signUp()}>Sign up</u> or <u onClick={() => logIn()}>Login</u>.
        </div> */}
        {/* <div className="font m-3">
          <strong>Step 2:</strong> Create a category!
        </div>
        <div className="font m-3 pb-4">
          <strong>Step 3:</strong> Search & organize away!
        </div> */}
      </div>
    </div>
  );
};

export default Steps