import { logIn, signUp } from 'actions/AuthAction';
import Logo from 'img/logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './auth.scss';
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setSignUp] = useState(false);
  const initialState = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmPassword ? dispatch(signUp(data)) : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };
  return (
    <div className="Auth">
      <div className="Auth__left">
        <img src={Logo} alt="" />
        <div className="Auth__left--info">
          <h1>Ngọc Diễm Media</h1>
          <h6>Website này dành cho những người bạn Việt Nam</h6>
        </div>
      </div>
      <div className="Auth__right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? 'Sign Up' : 'Login'}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                onChange={handleChange}
                value={data.firstName}
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />

              <input
                type="text"
                onChange={handleChange}
                value={data.lastName}
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              onChange={handleChange}
              value={data.userName}
              placeholder="User Name"
              className="infoInput"
              name="username"
            />
          </div>

          <div>
            <input
              type="password"
              onChange={handleChange}
              placeholder="Password"
              className="infoInput"
              name="password"
              value={data.Password}
            />

            {isSignUp && (
              <input
                type="password"
                onChange={handleChange}
                placeholder="Last Name"
                className="infoInput"
                name="confirmPassword"
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              color: 'red',
              fontSize: '12px',
              alignSelf: 'flex-end',
              marginRight: '5px',
              display: confirmPass ? 'none' : 'block',
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              onClick={() => {
                resetForm();
                setSignUp((pre) => !pre);
              }}
              style={{ textAlign: 'center', fontSize: '12px', cursor: 'pointer' }}
            >
              {isSignUp ? 'Already have an account . Login!' : "Don't have an account ? Sign Up"}
            </span>
          </div>
          <button
            disabled={loading}
            className="button infoButton"
            type="submit"
            onClick={handleSubmit}
          >
            <h3>{loading ? 'Loading ...' : isSignUp ? 'Sign Up' : 'Login'}</h3>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
