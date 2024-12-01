import { Grid } from '@mui/material'
import React from 'react'
import Feed from './Feed/Feed'
import Left from './Left'
import Right from './Right'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>({
  left: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  right: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  feed: {
    paddingLeft: '32px!important',
    paddingRight: '32px!important'
  }
}))

const Home = () => {

  const classes = useStyles();

    return (
        <Grid container spacing={2} style={{marginTop: 40}}>
          <Grid item xs={3} className={classes.left}>
            <Left/>ss
          </Grid>
          <Grid item xs={6} className={classes.feed}>
            <Feed/>
          </Grid>
          <Grid item xs={3} className={classes.right}>
            <Right/>
          </Grid>
        </Grid>
    )
}

export default Home
