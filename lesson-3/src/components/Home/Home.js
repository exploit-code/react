import React from 'react';
import { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// My Components 
import ChatList from '../ChatList'

const useStyles = makeStyles({
  caption: {
    fontSize: '4em',
    lineHeight: '1em',
    margin: '0 0 30px 0'
  },
  chatContainer: {
    marginTop: '60px'
  },
  addButton: {
    position: 'fixed',
    right: '50px',
    bottom: '50px',
    background: '#80167a',

    '&:hover': {
      background: '#4d0549'
    }
  }
})

const Home = (props) => {

  const classes = useStyles()
  const [chats, setChats] = useState(props.chats.chats)

  console.log(chats)

  return (
    <Container maxWidth="lg" className={classes.chatContainer}>

      <ChatList chats={props.chats.chats} />

    </Container>
  );
}

export default Home;
