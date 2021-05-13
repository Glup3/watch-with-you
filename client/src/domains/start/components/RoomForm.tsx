import React, { FormEvent, FunctionComponent, useState } from 'react'
import { Button, createStyles, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(2)
        },
        paper: {
            padding: theme.spacing(3)
        },
        submit: {
            marginTop: theme.spacing(2)
        }
    })
)

export const RoomForm: FunctionComponent = () => {
    const classes = useStyles()
    const history = useHistory()
    const [roomId, setRoomId] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        history.push(`/rooms/${roomId}`)
    }

    return (
        <Paper className={classes.paper}>
            <form onSubmit={onSubmit}>
                <Typography variant="h4" className={classes.title}>
                    Join a Room
                </Typography>
                <TextField
                    name="room-id-input"
                    label="Room ID"
                    fullWidth
                    variant="outlined"
                    required
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Join
                </Button>
            </form>
        </Paper>
    )
}
