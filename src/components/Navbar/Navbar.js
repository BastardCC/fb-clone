import { AppBar, Avatar, Toolbar, Typography, InputBase, Badge } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import {useLocation} from 'react-router-dom';

import {Link} from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DialpadIcon from '@mui/icons-material/Dialpad';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import {makeStyles} from '@mui/styles';

import profile from '../../assets/simpson.png'
import facebook from '../../assets/icons/facebook-icon.png'

import './Navbar.css'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
    },
  }));

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '55px!important'
    },
    left:{
        display: 'flex',
        alignItems: 'center' ,
        height: '55px'
    },
    navigation: {
        display: 'flex',
        height: '55px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    searchIcon: {
        backgroundColor: '#444546!important',
        [theme.breakpoints.up('md')]:{
            display: 'none!important'
        },
        [theme.breakpoints.down('md')]: {
            display: 'flex!important'
        }
    },
    search: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    right: {
       display: 'flex',
       alignItems: 'center'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
        padding:5,
        '&:hover':{
            backgroundColor: '#3A3B3C',
            borderRadius:20
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    icon: {
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #2374e1',
    },
    hover: {
        height: '93%', 
        display: 'flex',
        alignItems: 'center',
        '&:hover':{
            backgroundColor: '#3A3B3C',
            borderRadius: 12           
        }
    },
    menuIcon: {
        margin: '0px 30px',
    },
    rightAvatar: {
        marginLeft: 5,
        backgroundColor: '#444546!important'
    },
    logo: {
        width: '60px!important',
        height: '60px!important',
        color: '#0e8ef1'
    },
    currentIcon: {
        color: "#2374e1"
    },
    nonCurrentIcon: {
        color: "#B8BBBF",
    }
}))

const Navbar = () => {

    const location = useLocation();

    const classes = useStyles();
    return (
        <div>
           <AppBar position= 'fixed' style={{backgroundColor: '#242526'}}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>
                        <Avatar src={facebook} className={classes.logo}/>
                        <div>
                        <Search className={classes.search}>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Rechercher sur Facebook"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        </div>
                        <Avatar className={classes.searchIcon}>
                            <SearchIcon/>
                        </Avatar>
                    </div>
                    <div className={classes.navigation}>
                        <div className={location.pathname==='/' ? classes.icon : classes.hover}>
                            <Link to='/'>
                                <Badge className={classes.menuIcon}>
                                    <HomeIcon fontSize='large' className={location.pathname==='/' ? classes.currentIcon : classes.nonCurrentIcon} />
                                </Badge>
                            </Link>
                        </div>
                        <div className={location.pathname==='/watch' ? classes.icon : classes.hover}>
                            <Link to='/watch'>
                                <Badge badgeContent={3} className={classes.menuIcon} color='secondary'>
                                    <ComputerIcon fontSize='large' className={location.pathname==='/watch' ? classes.currentIcon : classes.nonCurrentIcon} />
                                </Badge>
                            </Link>
                        </div>
                            <div className={location.pathname==='/groups' ? classes.icon : classes.hover}>
                                <Link to='/groups'>
                                        <Badge badgeContent={7} className={classes.menuIcon} color='secondary'>
                                            <GroupsIcon fontSize='large' className={location.pathname==='/groups' ? classes.currentIcon : classes.nonCurrentIcon}/>
                                        </Badge>
                                </Link>
                            </div>
                            <div className={location.pathname==='/gaming' ? classes.icon : classes.hover}>
                                <Link to='/gaming'>
                                        <Badge badgeContent={2} className={classes.menuIcon} color='secondary'>
                                            <SportsEsportsIcon fontSize='large' className={location.pathname==='/gaming' ? classes.currentIcon : classes.nonCurrentIcon} />
                                        </Badge>
                                </Link>
                            </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.profile}>
                            <Avatar src={profile} style={{height: 30, width: 30}}/>
                            <Typography style={{marginLeft: 5}}>Basta</Typography>
                        </div>
                        <Avatar className={classes.rightAvatar}>
                            <DialpadIcon className={classes.rightIcon} fontSize='small'/>
                        </Avatar>
                        <Avatar className={classes.rightAvatar}>
                            <MessageIcon className={classes.rightIcon} fontSize='small'/>
                        </Avatar>
                        <Avatar className={classes.rightAvatar}>
                            <NotificationsIcon className={classes.rightIcon} fontSize='small'/>
                        </Avatar>
                        <Avatar className={classes.rightAvatar}>
                            <KeyboardArrowDownIcon className={classes.rightIcon} fontSize='small'/>
                        </Avatar>
                    </div>
                </Toolbar>
           </AppBar>
        </div>
    )
}

export default Navbar
