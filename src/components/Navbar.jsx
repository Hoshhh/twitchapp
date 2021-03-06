import React, { useState, useEffect } from 'react'
import api from '../api'
import { alpha, AppBar, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, GitHub, Search } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
      maxHeight: '64px'
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
        marginLeft: theme.spacing(1),
        width: '100%',
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

const Navbar = (props) => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })

    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchStreams = async () => {
            const results = await api.get('https://api.twitch.tv/helix/search/channels' + search)
            
            props.changeData(results.data.data.map(result => (
                {
                    name: `${result.broadcaster_login}`, 
                    id: result.id
                }
            )))
        }
        fetchStreams();
    }, [search])

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
            <InputBase 
                placeholder='Search streams...' 
                className={classes.input} 
                onChange={event => {setSearch('?query=' + event.target.value)}}
                onFocus={() => props.showResults(true)}
                onBlur={() => props.showResults(false)}
            />
            <div className={classes.cancel}>
                <Cancel onClick={() => setOpen(false)}/>
            </div>
          </div>
        <div className={classes.icons}>
            <div className={classes.searchButton}>
                <Search onClick={() => setOpen(true)} />
            </div>
            <IconButton href="https://github.com/Hoshhh/twitchapp" target="_blank">
                <GitHub className={classes.gitIcon} fontSize="large" />  
            </IconButton>
        </div>
      </Toolbar>
  </AppBar>
}

export default Navbar