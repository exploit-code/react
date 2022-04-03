import React from 'react';
import {
  Link
} from "react-router-dom";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  listItem: {
    flexWrap: 'wrap',
    width: 'calc(33.333% - 40px)',
    minWidth: '300px',
    margin: '20px',
    padding: '25px'
  },
  link: {
    fontSize: '.8em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '140px',
    height: '33px',
    borderRadius: '10px',
    background: '#3f51b5',
  }
})


function ChatList(props) {


  const classes = useStyles()

  return (
    <List className={classes.list}>
      {props.chats.map(({ id, name, avatar, message }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.listItem} button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={avatar} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={message} />
            <Link to={`/chats/${id}`} className={classes.link}>
              Go to chat
            </Link>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  )

}

export default ChatList;
