import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Auth = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const divStyle = {
        backgroundColor: 'white',
      };

     const handleSubmit = event => {
        event.preventDefault();
        const user = {
          username: username,
          password: password,

        }
        axios.post('http://localhost:5000/auth',  user )
          .then(res=>{
            console.log(res);
            console.log(res.data);
          })
      }

    return (
        <div style = {divStyle}>
            <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <TextField 
                name='username' 
                variant='outlined' 
                label='username' 
                fullWidth 
                
                onChange={(e) => { 
                    setUsername( e.target.value)
                }}
             />
             <TextField 
                name='password' 
                variant='outlined' 
                label='password' 
                fullWidth 
                
                onChange={(e) => { 
                    setPassword( e.target.value)
                }}
             />
             <Button variant="container" color="primary" size="large" type="submit" fullwidth>Register</Button>
            </form>
        </div>
      );
}
 
export default Auth;