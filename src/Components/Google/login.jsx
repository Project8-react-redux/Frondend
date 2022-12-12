import { React, useEffect } from 'react';
import { gapi } from "gapi-script";


import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from './refreshToken'
import axios from 'axios';
const qs = require('qs');

const clientId ='1028723542336-jnaghlrmbulqn8l6ksmcd8kbmtscfbed.apps.googleusercontent.com';

function LoginGoogle() {

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });


  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);

      const config = {
      method: 'post',
      url: 'http://localhost:8000/api/google-register',
      headers: { 
        'Accept': 'application/vnd.api+json', 
        // 'Content-Type': 'multipart/form-data'
      },
      data : qs.stringify(res)
    };

    axios(config).then((res) => {
      console.log(res);
    })
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 please try again `
    );
  };

  return (
    <div className='d-flex mt-3 p-'>
      <GoogleLogin className='d-flex justify-content-center text-dark rounded-4 w-100'
    //   bg-dark text-light style if we want it to be dark
        clientId={clientId}
        buttonText="Login with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;