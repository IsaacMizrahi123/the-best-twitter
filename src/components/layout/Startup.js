import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Startup() {
    return ( 
        <div className="container">
            <section className="section section1">
                <input placeholder="Phone, email, or username"/>
                <input placeholder="Password"/>
                <div className="container container-icon">
                    {/* <icon className="icon"></icon> */}
                    <button className="button button-log-in">Log in</button>
                </div>
                <h2 className="">See what’s happening in the world right now</h2>
                <h4 className="">Join Twitter today.</h4>
                <button className="button button-sign-up">Sign up</button>
                <button className="button button-log-in">Log in</button>
            </section>
            <section className="section section2">
                <div className="item1">
                    <h3 className="item center">Follow your interests.</h3>
                </div>
                <div className="item2">
                    <h3 className="item center">Hear what people are talking about.</h3>
                </div>
                <div className="item3">
                    <h3 className="item center">Join the conversation.</h3>
                </div>
            </section>
            <footer className="footer"></footer>
        </div>          
    );  
  }

  export default Startup;