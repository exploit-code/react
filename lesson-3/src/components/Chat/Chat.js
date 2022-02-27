import React, { useState, useEffect, useRef } from 'react';
import {
  useParams
} from "react-router-dom";
import {
  Redirect
} from "react-router-dom";

// My components
import Error from '../Error'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



// My Components
import Message from '../Message'
import ChatList from '../ChatList';

const useStyles = makeStyles({
  field: {
    width: '100%'
  },
  chatContainer: {
    width: '100%',
    minHeight: '40px'
  },
  mainCaption: {
    fontWeight: 900,
    fontSize: '2.7em',
    lineHeight: '1em',
    margin: '0 0 1em 0'
  },
  container: {
    padding: '1em 0 0 0'
  },
  chatListCaption: {
    fontWeight: '900',
    color: '#b8b8b8'
  },
  userInfo: {
    margin: '0 0 20px 0',
    padding: '15px'
  },
  userName: {
    fontWeight: 700,
    color: '#bfbfbf',
    margin: '0 0 10px 0'
  },
  large: {
    width: '60px',
    height: '60px',
    background: '#fff'
  },
  button: {
    fontSize: '.8em',
    width: '140px',
    height: '44px'
  }
})

const Chat = (props) => {

  let { id } = useParams()
  const classes = useStyles()

  const [messageList, setMessageList] = useState([])
  const [authorList, setAuthorList] = useState([])
  const [user, setUser] = useState({})
  const [messageFied, setMessageField] = useState('')
  const [authorField, setAuthorField] = useState('')

  const inputRef = useRef()

  useEffect(() => {
    const currnetUser = props.chats.chats.filter(elem => elem.id == id);
    setUser(currnetUser[0])
  })

  // console.log('user.length - ', Object.keys(user).length)

  useEffect(() => {

    const obj = {
      name: user.name,
      avatar: user.avatar,
      message: `Hi, I'm ${user.name}, how are you doing?`,
      time: new Date().toLocaleDateString() + ' in ' + new Date().toLocaleTimeString(),
      class: 'messageRobot'
    };

    if (authorList.length) {
      setTimeout(() => setMessageList((oldArray) => [...oldArray, obj]), 1500)
    }

    inputRef.current.focus();

  }, [authorList])

  const getDataForm = (e) => {
    e.preventDefault()

    const obj = {
      name: authorField,
      message: messageFied,
      time: new Date().toLocaleDateString() + ' in ' + new Date().toLocaleTimeString(),
      class: 'messageUser'
    }

    if (authorField.length > 0 && messageFied.length > 0) {
      setMessageList((oldArray) => [...oldArray, obj])
      setAuthorList((oldArray) => [...oldArray, authorField])

      setAuthorField('')
      setMessageField('')

    }

    inputRef.current.focus();
  }

  return (
    <React.Fragment>
      {user ?

        <Container maxWidth="md">
          <Grid container >
            <Grid item xs={5}>
              <ChatList chats={props.chats.chats} />
            </Grid>

            <Grid item xs={7}>
              <Paper className={classes.userInfo}>
                <Typography className={classes.userName}>Chat with, {user.name}</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Avatar src={user.avatar} alt={user.name} className={classes.large} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2" color="textSecondary">{user.status}</Typography>
                  </Grid>
                </Grid>
              </Paper>

              <div className={classes.chatContainer}>
                {console.log('RENDER')}
                {messageList.map((el, index) => {
                  return <Message message={el} key={index} />
                })}

              </div>
              <form className="form-send" onSubmit={getDataForm}>
                <Box component="div" m={2}>
                  <TextField
                    onInput={(e) => setAuthorField(e.target.value)}
                    id="outlined-basic"
                    label="Имя"
                    placeholder="Укажите ваше"
                    variant="outlined"
                    value={authorField}
                    size="small"
                    className={classes.field}
                    inputRef={inputRef}
                  />
                </Box>

                <Box component="div" m={2}>
                  <TextField
                    onInput={(e) => setMessageField(e.target.value)}
                    id="outlined-multiline-static"
                    label="Сообщение"
                    placeholder="Введите ваше собщение"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={messageFied}
                    className={classes.field}
                  />
                </Box>
                <Box component="div" m={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                  >
                    Отправить
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>

        : <Redirect to="/error-404" />}
    </React.Fragment>
  );
}

export default Chat;
