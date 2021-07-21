import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux"
import { startFacebookLogin, startGoogleLogin } from '../action/auth';

import '../styles/css/SignIn/btn.css'
import '../styles/css/SignIn/signIn.css'
import '../styles/css/SignIn/social-btn.css'
import '../styles/css/Innecesary/styles.css'
import { setRutas } from '../action/rutas';


export const SignIn = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        dispatch(setRutas(history.location.pathname))
    }, [dispatch, history.location.pathname])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSignIn = () => {
        
        history.replace('/');
    }
    const handleSignInGoogle = () => {
        dispatch( startGoogleLogin() );
    }

    const handleSignInFacebook = () => {
        dispatch( startFacebookLogin() );
    }

    return (
        <div className="body_Sign" >

            <div className="div_centrado">
                <div className="box_container">
                    <form className="formSignIn" onSubmit={handleSubmit} >
                        <div>
                            <img className="image" src={`./images/appland.png`} alt="logo" />
                            <h1 className="space">Sign In</h1>
                        </div>
                        <div>
                            <input className="auth_input icono" type="text" name="username" id="username" placeholder="&#xf007;  Username"/>
                            <input className="auth_input icono" type="password" name="password" id="password" placeholder="&#xf023;  Password"/>
                            <button type="button" className="btn_sign" onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div>
                            <p className="p-size linea"><span>Or</span></p>
                            <button className="social-signin facebook" onClick={handleSignInFacebook}>Log in with facebook</button>
                            <button className="social-signin google" onClick={handleSignInGoogle}>Log in with Google+</button>
                        </div>
                        <div className="member" >
                            <a href="url">Not a member? Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
