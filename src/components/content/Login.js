import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Login() {
    return ( 
        <div className="back">
            <div className="card">
                <div className="part1">
                    <h1 className="reset">Log in to Twitter</h1>
                    <input className="" placeholder="Phone, email or username"/>
                    <input className="" placeholder="Password"/>
                    <div className="grupo">
                        <button className="botton">Log in</button>
                        <h4>Remember me</h4>
                        <link></link>
                        <Link to="/" className="link">Forgot password?</Link>
                    </div>
                </div>
                <footer className="footer">
                    <div className="p1">
                        <h4 className="standar">New to Twitter? </h4>
                        <Link to="/" className="standar"> Sign up no >></Link>
                    </div>
                    <div className="p1">
                        <h4 className="standar">Already using Twitter via text message? </h4>
                        <Link to="/" className="standar"> Active your account >></Link>
                    </div>
                </footer>
            </div>            
        </div>          
    );  
  }

  export default Login;