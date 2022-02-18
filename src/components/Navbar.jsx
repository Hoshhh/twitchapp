import React from 'react'
import { alpha, AppBar, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { GitHub, Search } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    logoLg: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: "block",
        }
    },

    logoSm: {
        display: 'block',
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha('#F5F7FA', 0.15),
        '&:hover': {
            backgroundColor: alpha('#F5F7FA', 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width: '33%'
    },
    input: {
        color: '#F5F7FA',
        margin: theme.spacing(1)
    },
    icons: {
        color: '#F5F7FA',
    }
}))

const Navbar = () => {
    const classes = useStyles()
  return <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
          <Typography varaint="h5" className={classes.logoLg}>
              MultiStream
          </Typography>
          <Typography varaint="h5" className={classes.logoSm}>
              MS
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder='Search streams...' className={classes.input} />
          </div>
        <IconButton href="https://github.com">
            <GitHub className={classes.icons} fontSize="large" />  
        </IconButton>
      </Toolbar>
  </AppBar>
}

export default Navbar