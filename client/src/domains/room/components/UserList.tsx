import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { SocketContext } from '../../../common/context/socketContext'

export const UserList = () => {
    const { socket } = useContext(SocketContext)
    const [users, setUsers] = useState<string[]>([])

    const handleSetUserList = useCallback((userList: string[]) => {
        setUsers(userList)
    }, [])

    useEffect(() => {
        socket.on('room:userList', handleSetUserList)

        return () => {
            socket.off('room:userList', handleSetUserList)
        }
    }, [socket, handleSetUserList])

    return (
        <Grid item xs={12} md={3}>
            <Typography variant="h6">Users</Typography>
            <List dense>
                {users.map((user) => (
                    <ListItem key={`user-${user}`}>
                        <ListItemIcon>
                            <PersonIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={user} />
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}
