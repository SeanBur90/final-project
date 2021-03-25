import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, useTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts'
import Post from './Posts/Posts'
import useStyles from './Posts/styles';


const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxwidh='lg'>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spaceing={3}>
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
   );
}
 
export default Home;