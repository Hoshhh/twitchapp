import React, { useState } from 'react'
import { alpha, AppBar, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, GitHub, Search } from '@mui/icons-material'

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
        width: '33%',
        [theme.breakpoints.down("xs")]: {
            display: (props) => (props.open ? "flex" : "none"),
        },
        
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    input: {
        color: '#F5F7FA',
        marginLeft: theme.spacing(1)
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    },
    icons: {
        alignItems: 'center',
        display: (props) => (props.open ? "none" : "flex"),
    },
    gitIcon : {
        color: '#F5F7FA',
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })


    return <AppBar position="fixed" className={classes.appbar}>
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
            <div className={classes.cancel}>
                <Cancel onClick={() => setOpen(false)}/>
            </div>
          </div>
        <div className={classes.icons}>
            <div className={classes.searchButton}>
                <Search onClick={() => setOpen(true)} />
            </div>
            <IconButton href="https://github.com">
                <GitHub className={classes.gitIcon} fontSize="large" />  
            </IconButton>
        </div>
      </Toolbar>
  </AppBar>
}

export default Navbar