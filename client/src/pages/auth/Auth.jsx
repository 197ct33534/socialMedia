import React from 'react';
import './auth.scss';
import Logo from 'img/logo.png';
const Auth = () => {
  return (
    <div className="Auth">
      <div className="Auth__left">
        <img src={Logo} alt="" />
        <div className="Auth__left--info">
          <h1>Ngọc Diễm Media</h1>
          <h6>Website này dành cho những người bạn Việt Nam</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};
function SignUp() {
  return (
    <div className="Auth__right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input type="text" placeholder="First Name" className="infoInput" name="firstName" />

          <input type="text" placeholder="Last Name" className="infoInput" name="lastName" />
        </div>
        <div>
          <input type="text" placeholder="User Name" className="infoInput" name="userName" />
        </div>
        <div>
          <input type="password" placeholder="First Name" className="infoInput" name="password" />

          <input
            type="password"
            placeholder="Last Name"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{ textAlign: 'center', fontSize: '12px' }}>
            Already have an account . Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
function Login() {
  return (
    <div className="Auth__right">
      <form className="infoForm authForm">
        <h3>Login</h3>

        <div>
          <input type="text" placeholder="User Name" className="infoInput" name="userName" />
        </div>
        <div>
          <input type="password" placeholder="First Name" className="infoInput" name="password" />
        </div>
        <div>
          <span style={{ textAlign: 'center', fontSize: '12px' }}>
            Already have an account . Login!
          </span>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
export default Auth;
