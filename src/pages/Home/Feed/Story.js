import { Avatar, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'

import story1 from '../../../assets/story/story1.jpg'
import story2 from '../../../assets/story/story2.jpg'
import story3 from '../../../assets/story/story3.jpg'
import story4 from '../../../assets/story/story4.jpg'
import story5 from '../../../assets/story/story5.jpg'

import user1 from '../../../assets/users/user1.png'
import user2 from '../../../assets/users/user2.png'
import user3 from '../../../assets/users/user3.png'
import user4 from '../../../assets/users/user4.png'
import user5 from '../../../assets/users/user5.png'

import simpson from '../../../assets/simpson.png'


import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';

import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    storyContainer: {
        display: 'flex',
        // justifyContent: 'space-between',
        justifyContent: 'center'
    },
    createStory: {
        width: 120,
        height: 200,
        marginRight: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center'
    },
    story: {
        width: 120,
        height: 200,
        marginRight: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    avatar: {
        height: '35px!important',
        width: '35px!important',
        margin: 10,
        border: '4px solid #297BE5'
    },
    name: {
        alignItems: 'flex-end',
        display: 'flex',
        marginLeft: 5,
        height: 40
    }, 
    more: {
        display: 'flex',
        marginLeft: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreIcon: {
        '&:hover': {
            backgroundColor: '#636466!important',
        }
    }
}))

const Story = () => {

    const classes = useStyles();

    const storyData = [
        {
            id: 1,
            name: 'John Lenon',
            image: story1,
            profileImage: user1
        },
        {
            id: 2,
            name: 'John Doe',
            image: story2,
            profileImage: user2
        },
        {
            id: 3,
            name: 'Kyle Walker',
            image: story3,
            profileImage: user3
        },
        {
            id: 4,
            name: 'Buu Gha',
            image: story4,
            profileImage: user4
        },
    ]

    return (
        <div style={{marginTop: 20}}>
           <div className={classes.storyContainer}>
                <div className={classes.createStory} style={{backgroundImage: `url(${simpson})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div style={{backgroundColor: '#202122',height: 70,width:'100%', borderBottomRightRadius: 10,borderBottomLeftRadius: 10, display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                        {/* <Typography>Créer une story</Typography> */}
                        <Typography variant='body2' style={{textAlign: 'center',fontSize:12, fontWeight: 'bold', marginBottom: 10}}>Créer une <br />story</Typography>
                    </div>
                    <div>
                            <IconButton style={{backgroundColor: '#297BE5', height:40,width: 40, marginBottom: -20, border:'4px solid #202122'}}>
                                <AddIcon style={{color: 'white'}}/>
                            </IconButton>
                    </div>
                </div>
                {
                    storyData.map(item => (
                        <div className={classes.story} style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover'}}>
                            <Avatar src={item.profileImage} className={classes.avatar}/>
                            <div className={classes.name}>
                                <Typography style={{display: 'flex', alignItems: 'flex-end'}}>{item.name}</Typography>
                            </div>
                        </div>
                    ))
                } 
                <div className={classes.more}>
                <Tooltip title="Voir toutes les stories">
                    <IconButton style={{backgroundColor: '#525355', height:40,width: 40}} className={classes.moreIcon}> 
                        <ArrowRightAltIcon style={{color: 'white'}}/>
                    </IconButton>
                </Tooltip>
                </div>
            </div> 
        </div>
    )
}

export default Story