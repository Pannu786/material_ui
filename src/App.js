import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContext,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar sx={{ margin: 'auto' }}>
          <PhotoCameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Collection
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Hi fellas this is me Harpreet Singh Pannu trying to learn MateriaL
              UI AKA MUI, lets see how it does look and I hope it will look
              good. So thanks for stick around 😀
            </Typography>
            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    sx={{
                      background: '#006064',
                    }}
                  >
                    Check Out These Random Pics
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
