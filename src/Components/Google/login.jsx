import { React, useEffect, useState } from 'react';
import { gapi } from "gapi-script";
import { useNavigate } from 'react-router';
import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';
import { refreshTokenSetup } from './refreshToken'
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';

const qs = require('qs');

const clientId = '1028723542336-jnaghlrmbulqn8l6ksmcd8kbmtscfbed.apps.googleusercontent.com';

function LoginGoogle() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  // check if the email exists first and logiin if ture  retiger if false ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  const onSuccess = (res) => {

    const config = {
      method: 'post',
      url: 'http://localhost:8000/api/google-register',
      headers: {
        'Accept': 'application/vnd.api+json',
      },
      data: res.profileObj
    };
    console.log(res.profileObj);

    axios(config).then((res) => {
      console.log(res);
      if (
        signIn({
          token: res.data.token,
          expiresIn: 1000,
          tokenType: "Bearer",
          authState: {
            user: res.data.data.user,
            token: res.data.data.token,
            role: res.data.data.user.role,
          },
        })
      ) {
        return navigate("/");
      }
     
    })
  };

  const onFailure = (res) => {
    // console.log('Login failed: res:', res);
    // alert(
    //   `Failed to login. 😢 please try again `
    // );
  };

  return (
    <div className='d-flex flex-wrap mt-3 p-'>

      <GoogleLogin className='d-flex justify-content-center text-dark rounded-4 w-100'
        //   bg-dark text-light style if we want it to be dark
        clientId={clientId}
        buttonText="Login with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
       />
    </div>
  );
}

export default LoginGoogle;