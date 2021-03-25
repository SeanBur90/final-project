import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Toolbar, Avatar, Button } from '@material-ui/core';

import store from '../../images/store.jpg'
import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return ( 
        <AppBar className = {classes.appBar} position='static' color='inheret'>
            <div className= {classes.brandContainer}>
                <Typography to='/' className = {classes.heading} variant='h2' align='center'>Store</Typography>
                <img className = {classes.image} src={store} alt="store" height='220' width='300' align='center' />
            </div>
            <div >
            
                <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
                <Button component={Link} to="/form" variant="contained" color="primary">Create Store</Button>
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign Up</Button>
                <Button component={Link} to="/login" variant="contained" color="primary">Login</Button>
              
            </div>
        
      </AppBar>
     );
}
 
export default Navbar;