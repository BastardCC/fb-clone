import React, { useState } from 'react'
import { Avatar, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import StoreIcon from '@mui/icons-material/Store';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventNoteIcon from '@mui/icons-material/EventNote';
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import pubg from '../../assets/Shortcuts/pubg.jpg'
import NBA from '../../assets/Shortcuts/NBA.png'
import dev from '../../assets/Shortcuts/dev.png'
import book from '../../assets/Shortcuts/book.jpg'

import { makeStyles } from '@mui/styles'

import simpson from '../../assets/simpson.png'

import './Left.css'


const limitWeb = 5;



const useStyles = makeStyles((theme) => ({
    list: {
        "&::-webkit-scrollbar": {
            width: 6,
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
            
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            outline: `1px solid slategrey`,
            borderRadius: 10
          },
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20
    },
    profileName: {
        marginLeft: '10px!important',
        fontWeight: 'bold !important'
    },
    icon: {
        height: '36px!important',
        width: '36px!important',
    },
    iconContainer: {
        borderRadius: '14px!important',
        '&:hover': {
            backgroundColor: '#303031!important',
            borderRadius: 14
        },
    },
    toggleButton: {
        '&:hover': {
            backgroundColor: '#303031!important'
        }
    },
    shorctcutImage: {
        height: 40,
        width: 40,
        borderRadius: 10
    },
    shorctcutName: {
        marginLeft: 20
    }
}))

const Left = () => {

    const [limit,setLimit] = useState(limitWeb);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const showMore = () => {
        setLimit(limit + 9);
        setOpen(true)
    };

    const showLess = () =>{
        setLimit(limitWeb);
        setOpen(false)
    }

    const listData = [
        {
            id: 1,
            title: 'Amis',
            icon: <PersonIcon style={{color: '#6edbcd'}} className={classes.icon} />
        },
        {
            id: 2,
            title: 'Groupes',
            icon: <GroupsIcon style={{color: '#36a4fa'}} className={classes.icon}/>
        },
        {
            id: 3,
            title: 'Watch',
            icon: <PersonalVideoIcon style={{color: '#fc6a20'}} className={classes.icon}/>
        },
        {
            id: 4,
            title: 'Souvenirs',
            icon: <AvTimerIcon style={{color: '#82c8e0'}} className={classes.icon}/>
        },
        {
            id: 5,
            title: 'Marketplace',
            icon: <StoreIcon style={{color: '#36a4fa'}} className={classes.icon}/>
        },
        {
            id: 6,
            title: 'Centre de climatologie',
            icon: <NightsStayIcon style={{color: '#e9ed1c'}} className={classes.icon}/>
        },
        {
            id: 7,
            title: 'Collectes de fonds',
            icon: <VolunteerActivismIcon style={{color: '#ed1c84'}} className={classes.icon}/>
        },
        {
            id: 8,
            title: "COVID-19 - Centre d'information",
            icon: <MedicalServicesIcon style={{color: 'white'}} className={classes.icon}/>
        },
        {
            id: 9,
            title: 'Collectes de fonds',
            icon: <BookmarkIcon style={{color: '#9c4ed7'}} className={classes.icon}/>
        },
        {
            id: 10,
            title: 'Activité publicitaire récente',
            icon: <AnalyticsIcon style={{color: '#5098d3'}} className={classes.icon}/>
        },
        {
            id: 11,
            title: 'Evènements',
            icon: <EventNoteIcon style={{color: '#ce2952'}} className={classes.icon}/>
        },
        {
            id: 12,
            title: 'Favoris',
            icon: <StarIcon style={{color: '#ead72c'}} className={classes.icon}/>
        },
        {
            id: 13,
            title: 'Jouer à des jeux',
            icon: <SportsEsportsIcon style={{color: '#eab72c'}} className={classes.icon}/>
        },
        {
            id: 14,
            title: "Offres d'emploi",
            icon: <WorkIcon style={{color: '#9b6c50'}} className={classes.icon}/>
        },

    ]

    const shortcutData = [
        {
            id: 1,
            title: 'PUBG Mobile',
            image: pubg 
        },
        {
            id: 2,
            title: 'NBA Discussion',
            image: NBA 
        },
        {
            id: 3,
            title: 'Dev Jam',
            image: dev 
        },
        {
            id: 4,
            title: 'Booking',
            image: book 
        },
    ]

    const renderList = () => {
        return(
                <List  style={{overflow: 'auto', maxHeight: '100vh'}} className={classes.list}>
                    {listData.slice(0,limit).map((item) => (
                    <ListItemButton className={classes.iconContainer} key={item.id}>
                    <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                    ))
                    }
                    {
                        open ? 
                        (
                        <Button onClick={showLess} style={{ width: '100%',justifyContent: 'flex-start', paddingLeft: 16, borderRadius:14}} className={classes.toggleButton}>
                            <Avatar style={{backgroundColor: '#444546'}}>
                                <ArrowDropUpIcon />
                            </Avatar>
                            <Typography style={{color: 'white',textTransform: 'none',marginLeft:20}}>Voir moins</Typography>
                        </Button>
                        )
                        :
                        (
                            <Button onClick={showMore} style={{width: '100%',justifyContent: 'flex-start', paddingLeft: 16, borderRadius:14}} className={classes.toggleButton}>
                                <Avatar style={{backgroundColor: '#444546'}}>
                                    <ArrowDropDownIcon/>
                                </Avatar>
                                <Typography style={{color: 'white',textTransform: 'none',marginLeft:20}}>Voir plus</Typography>
                            </Button>
                        )
                    }
                    <Divider style={{backgroundColor: '#444546'}}/>
                    <Typography>Vos raccourcis</Typography>
                    {
                        shortcutData.map(item => (
                            <ListItemButton className={classes.iconContainer}>
                                    <img src={item.image} className={classes.shorctcutImage} />
                                <ListItemText className={classes.shorctcutName}>{item.title}</ListItemText>
                            </ListItemButton>
                        ))
                    }
                </List>
        )
    }

    
    return (
        <div style={{color:'white', height:'100vh',marginTop:20,marginLeft:7, marginRight: 40}}>
            {/* Profile */}
            <div className={classes.profile}>
                <Avatar src={simpson} />
                <Typography className={classes.profileName}>Basta</Typography>
            </div>
            <div style={{marginBottom: 10}}>
                {renderList()}
                {/* {
                    open ? 
                    (
                    <Button onClick={showLess} style={{ width: '100%',justifyContent: 'flex-start', paddingLeft: 16, borderRadius:14}} className={classes.toggleButton}>
                        <Avatar style={{backgroundColor: '#444546'}}>
                            <ArrowDropUpIcon />
                        </Avatar>
                        <Typography style={{color: 'white',textTransform: 'none',marginLeft:20}}>Voir moins</Typography>
                    </Button>
                    )
                    :
                    (
                        <Button onClick={showMore} style={{width: '100%',justifyContent: 'flex-start', paddingLeft: 16, borderRadius:14}} className={classes.toggleButton}>
                            <Avatar style={{backgroundColor: '#444546'}}>
                                <ArrowDropDownIcon/>
                            </Avatar>
                            <Typography style={{color: 'white',textTransform: 'none',marginLeft:20}}>Voir plus</Typography>
                        </Button>
                    )
                } */}
            </div>
        </div>
    )
}

export default Left
