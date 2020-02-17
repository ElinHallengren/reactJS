import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import { AvMicNone } from 'material-ui/svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <a style={{ textDecoration: 'none', color: '#fff' }} href='/'>Store Name</a>
          </Typography>
         
          <Button color="inherit" href="/newUser">Add New User</Button>
          <Button  href='/showTable'>Display Table</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
