import React, { FunctionComponent } from 'react'
import { Box } from '@material-ui/core'
import { RoomForm } from '../domains/start/components/RoomForm'

export const StartPage: FunctionComponent = () => {
    return (
        <Box display="flex" justifyContent="center">
            <RoomForm />
        </Box>
    )
}
