import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, useTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Post from './components/Posts/Posts'
import Form from './components/Form/Form'
import store from './images/store.jpg'
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])
  return (
    <Container maxwidh='lg'>
      <AppBar className = {classes.appBar} position='static' color='inheret'>
        <Typography className = {classes.heading} variant='h2' align='center'>Store</Typography>
        <img className = {classes.image} src={store} alt="store" height='220' width='300' align='center' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spaceing={3}>
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
   );
}
 
export default App;