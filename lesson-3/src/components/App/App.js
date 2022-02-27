
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Home from '../Home'
import Profile from '../Profile'
import Error from '../Error'
import Chat from '../Chat'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  bar: {
    background: '#110c12'
  },
  toobar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  listNav: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    color: '#ffffff',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '.9em'
  },
  main: {
    marginTop: '100px'
  },

});

const App = (props) => {

  const classes = useStyles()

  return (
    <Router>

      <AppBar className={classes.bar}>

        <Toolbar className={classes.toobar}>
          <Typography variant="h6">Chat</Typography>
          <List className={classes.listNav}>
            <ListItem>
              <Link className={classes.link} to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link className={classes.link} to="/profile">Profile</Link>
            </ListItem>
          </List>
        </Toolbar>

      </AppBar>

      <main className={classes.main}>

        <Switch>
          <Route exact path="/">
            <Home chats={props} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chats/:id">
            <Chat chats={props} />
          </Route>
          <Route path="/error-404">
            <Error />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>

      </main>

    </Router>
  );
}

export default App;
