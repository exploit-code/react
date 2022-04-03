import { makeStyles } from '@material-ui/core/styles'

// Material UI
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
    messageUser: {
        background: '#bd80c3', 
        color: '#fff', 
        margin: '0 0 20px 0',
        padding: '15px 25px',
        borderRadius: '20px', 
    }, 
    messageRobot: {
        background: '#faeefb',
        color: '#697294', 
        margin: '0 0 20px 0',
        padding: '15px 25px',
        borderRadius: '20px', 
    }, 
    name: {
        fontWeight: '700'
    }, 
    time: {
        fontWeight: '600', 
        fontSize: '12px'
    }, 
    avatar: {
        margin: '0 0 10px 0'
    }
})

function Message(props) {
    const classes = useStyles()

    return (
        <div className={classes.messageUser}>
            
            <Avatar className={classes.avatar} />
            <Typography gutterBottom>{ props.message }</Typography>

        </div>
    )
}

export default Message