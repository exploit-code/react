
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector, connect } from 'react-redux';

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
import AddChat from '../AddChat';


const useStyles = makeStyles({
  bar: {
    background: '#8e3e96'
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

const App = ({ allChats, profile }) => {

  const classes = useStyles()



  // REDUX
  // const dispatch = useDispatch()

  // const count = store.count
  // const usersRedux = store.users

  // console.log('count - ', count)

  // const countIncrement = (count) => {
  //   dispatch({type: "INCREMENT", payload: count})
  // }

  // const countDecrement = (count) => {
  //   dispatch({type: "DECREMENT", payload: count})
  // }

  // const addUser = (userName) => {
  //   const user = {
  //     name: userName, 
  //     id: Date.now()
  //   }
  //   dispatch(addUserAction(user))
  // }

  // const removeUser = (userId) => {
  //   dispatch(removeUserAction(userId))
  // }
  // END REDUX

  // console.log(store)

  // const [chats, setChats] = useState(store.chats)

  // const addChat = (name, status, message) => {
  //   console.log('addChat Function', name, status, message)

  //   const obj = {
  //     id: chats.length + 1, 
  //     status: status, 
  //     name: name, 
  //     avatar: '', 
  //     message: message
  //   }

  //   setChats(oldArr => [ ...oldArr, obj ])

  // }

  return (
    <Router>

      <AppBar className={classes.bar}>

        <Toolbar className={classes.toobar}>
          <Typography variant="h6">Chats</Typography>
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
        {/* // REDUX */}
        {/* <div>{count}</div>
      <button onClick={() => countIncrement(10)}>INCR</button>
      <button onClick={() => countDecrement(5)}>DECR</button>
      <br />
      <br />

      <button onClick={() => addUser(prompt()) }>add user</button> */}
        {/* <button onClick={() => countDecrement(5)}>DECR</button> */}

        {/* { usersRedux.length ? 
        <div>{usersRedux.map(user => <div key={user.id} onClick={() => removeUser(user.id)}>{user.name} - {user.id}</div>)}</div>
        :
        <div>Пользователей нет</div>
      } */}
        {/* // END REDUX */}
        <Switch>
          <Route exact path="/">
            {/* <Home chats={allChats} /> */}
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chats/:id">
            {/* <Chat chats={allChats} /> */}
            <Chat />
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

// const mapStateToProps = (store) => {
//   return {
//     allChats: store.chats, 
//     profile:  store.profile
//   }
// }

export default App;

// export default connect(mapStateToProps, null)(App);
