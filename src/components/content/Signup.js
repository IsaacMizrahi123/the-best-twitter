import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Signup() {
    return ( 
        <div className="container">
            <button>Thank you, Next</button>
            <h1 className="text">Creat your account</h1>
            <input placeholder="Name"/>
            <h4>0/50</h4>
            <input placeholder="Phone"/>
            <h3>Use email instead</h3>
        </div>          
    );  
  }

  export default Signup;