import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, useTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom'

//import PrivateRoute from './components/PrivateRoute'
import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import SignIn from './components/SignIn';

const App = () => {

 
return (
  <Container maxwidh='lg'>
    <BrowserRouter>
      <Navbar />
        <Grow in>
          <Container>
            <div className="content">
            <Switch> 
              <Route path="/" exact component={Home} />
              <Route path="/form" exact component={Form} /> // This is now protected
              <Route path="/auth" exact component={Auth} />
              <Route path="/login" exact component={SignIn} />
            </Switch>
            </div>
          </Container>
        </Grow>
      </BrowserRouter>
    </Container>
   );
}
 
export default App;