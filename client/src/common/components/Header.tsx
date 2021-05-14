import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Link, Box } from '@material-ui/core'

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box marginRight={4}>
                    <Typography variant="h6">
                        <Link component={RouterLink} to="/" color="inherit">
                            Watch-with-you
                        </Link>
                    </Typography>
                </Box>
                <Typography>
                    <Link href="https://github.com/Glup3/watch-with-you" target="_blank" rel="noopener" color="inherit">
                        GitHub
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
