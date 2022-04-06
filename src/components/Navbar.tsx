import { 
  AppBar, Box, Grid, Toolbar,
} from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from 'src/utils/constants';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Navbar = () => {
  const location = useLocation();
  const curPath = location.pathname;

  const borderBottomColor = '#fff';

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item>
                <Link to={PATHS.HOME}>
                  <Button borderBottom={curPath === PATHS.HOME ? borderBottomColor : ''} sx={{ color: "white", height: "50px" }}>Home Page</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to={PATHS.PROFILE}>
                  <Button borderBottom={curPath === PATHS.PROFILE ? borderBottomColor : ''} sx={{color: "white", height: "50px" }}>Profile Page</Button>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};
