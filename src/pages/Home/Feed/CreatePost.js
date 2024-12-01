import { Avatar, Button, Divider, Typography, TextField, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles'

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonIcon from '@mui/icons-material/Person';
import TagFacesIcon from '@mui/icons-material/TagFaces';

import PublicIcon from '@mui/icons-material/Public';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import AbcIcon from '@mui/icons-material/Abc';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import simpson from '../../../assets/simpson.png'

import './CreatePost.css'
import { Box } from '@mui/system';



const audienceData = [
    {
        id: 1,
        name: 'Public',
        icon: <PublicIcon />
    },
    {
        id: 2,
        name: 'Amis',
        icon: <GroupIcon />
    },
    {
        id: 3,
        name: 'Moi uniquement',
        icon: <LockIcon />
    },
    {
        id: 4,
        name: 'Personnalisé',
        icon: <SettingsIcon />
    },
]

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        marginLeft: '10px!important',
        borderRadius: '20px!important',
        textTransform: 'none!important',
        justifyContent: 'flex-start!important',
        backgroundColor: '#464748!important',
        fontSize: '16px!important'
    },
    button: {
        width: '100%',
        textTransform: 'none!important',
        color: 'white!important',
        // backgroundColor: 'red!important',
        borderRadius: '10px!important',
        '&:hover': {
            backgroundColor: '#464748!important'
        }

    },
    buttonIcon: {
        width: '30px!important',
        height: '30px!important'
    },
    multilineColor: {
        color: 'white!important ',
        fontSize: '22px!important'
    },
    iconDialog: {
        height: '30px!important',
        width: '30px!important'
    },
    iconContainer: {
        padding: '4px!important',
        '&:hover': {
            backgroundColor: '#3A3B3C!important'
        }
    }
}))

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const CreatePost = () => {

    const [dialog, setDialog] = useState(false);
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const handleOpenDialog = () =>{
        setDialog(true)
    }

    const handleCloseDialog = () =>{
        setDialog(false)
    }

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle style={{display: 'flex', justifyContent: 'center', color:'white'}}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                  backgroundColor: '#4E4F50'
                // color: 'red'
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      };

      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };

    const classes = useStyles()
    return (
        <div style={{paddingTop: 10,marginLeft: 20,marginRight: 20}}>
            <div style={{display: 'flex',marginBottom: 10}}>
                <Avatar src={simpson}/>
                <Button variant="contained" className={classes.input} disableElevation onClick={handleOpenDialog}>Quoi de neuf, Basta?</Button>
            </div>
            <Divider style={{backgroundColor: '#444546'}}/>
            <div style={{marginTop: 10, display:'flex', justifyContent: 'space-between', paddingBottom: 10}}>
                <Button className={classes.button} startIcon={<InsertPhotoIcon className={classes.buttonIcon} style={{color: '#58C472'}}/>}>Photo/Vidéo</Button>
                <Button className={classes.button} startIcon={<PersonIcon className={classes.buttonIcon} style={{color: '#3085F3'}}/>}>Identifier des amis</Button>
                <Button className={classes.button} startIcon={<TagFacesIcon className={classes.buttonIcon} style={{color: '#F8C03E'}}/>}>Humeur/Activité</Button>
            </div>

            {/* DIALOOOOG */}
                <BootstrapDialog
                    onClose={handleCloseDialog}
                    aria-labelledby="customized-dialog-title"
                    open={dialog}
                    PaperProps={{
                        style:{borderRadius: 8,backgroundColor: '#242526'}
                    }}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialog} >
                        Créer une publication
                    </BootstrapDialogTitle>
                    <DialogContent dividers className='dialog'>
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <Avatar src={simpson}/>
                            <div style={{marginLeft: 10}}>
                                <Typography style={{color:'white'}}>Basta</Typography>
                                <div>
                                    <Button onClick={() => setValue(1)} style={{textTransform: 'none', color:'white', backgroundColor: '#4E4F50', height: 22, fontSize: 12}} startIcon={audienceData[0].icon} endIcon={<ArrowDropDownIcon/>}>
                                        {audienceData[0].name}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <TextField
                                multiline
                                variant='standard'
                                rows={4}
                                size='large'
                                placeholder="Quoi de neuf, Basta?"
                                style={{width:450}}
                                InputProps={{
                                    className: classes.multilineColor,
                                    disableUnderline: true
                                }}
                            />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <IconButton style={{backgroundColor: '#98eaa0', borderRadius: 6, height: 30, width: 30, border:'2px solid white'}}>
                                    <AbcIcon/>
                                </IconButton>
                                <IconButton>
                                    <SentimentSatisfiedAltIcon style={{color: '#4E4F50'}}/>
                                </IconButton>
                            </div>
                            <div style={{border: '1px solid #4E4F50', color: 'white', borderRadius: 10, marginBottom: 20}}>
                                <div style={{padding: 16,display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography>Ajouter à votre publication</Typography>
                                    <IconButton className={classes.iconContainer}>
                                        <InsertPhotoIcon className={classes.iconDialog} style={{color: '#58C472'}}/>
                                    </IconButton>
                                    <IconButton className={classes.iconContainer}>
                                        <PersonIcon className={classes.iconDialog} style={{color: '#3085F3'}}/>
                                    </IconButton>
                                    <IconButton className={classes.iconContainer}>
                                        <TagFacesIcon className={classes.iconDialog} style={{color: '#F8C03E'}}/>
                                    </IconButton>
                                    <IconButton className={classes.iconContainer}>
                                        <LocationOnIcon className={classes.iconDialog} style={{color: '#F66551'}}/>
                                    </IconButton>
                                    <IconButton className={classes.iconContainer}>
                                        <MicExternalOnIcon className={classes.iconDialog} style={{color: '#F23E5C'}}/>
                                    </IconButton>
                                    <IconButton className={classes.iconContainer}>
                                        <MoreHorizIcon className={classes.iconDialog} style={{color: '#6A6F76'}}/>
                                    </IconButton>
                                </div>
                            </div>
                            <Button style={{width: '100%'}} variant='contained'>Publier</Button>
                        </div>
                    </DialogContent>
            </BootstrapDialog>
        </div>
    )
}

export default CreatePost