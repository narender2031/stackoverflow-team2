import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookIcon from '@material-ui/icons/Book';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';


import SwipeableViews from 'react-swipeable-views';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

  
export class UserProfileDetails extends Component {
    useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.background.paper,
          width: 500,
        },
        button: {
          margin: theme.spacing(1),
        },
        rootcard: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: '#A29F9F',
        },
      }));
    render() {
       
        return (
            <div className="profileheader">
            <div className="headercontent">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={4}>
                <div className="profileavatar">
                    <AccountCircleIcon style={{ fontSize: '150px', color: '#eeeeee'}}/>
                    <div className="userhandle">
        <h4>{this.props.name}</h4>
                        <p>{this.props.username}</p>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} style={{ marginLeft: 'auto', marginTop: 'auto'}}>
                <div className="social">
                <List >
          
                    <ListItem>
                        <GitHubIcon fontSize="large" className="socialIcon github"/>
                        <FacebookIcon fontSize="large" className="socialIcon facebook"/>
                        <TwitterIcon fontSize="large" className="socialIcon twitter"/>
                        <InstagramIcon fontSize="large" className="socialIcon instagram"/><br/>
                       
                    </ListItem>
                    <ListItem>
                    <Button
                            variant="contained"
                            color="default"
                            size="small"
                            startIcon={<EditIcon />}
                        >Edit profile
                        </Button>
                    </ListItem>
                
                </List> 
                </div>
              </Grid>
              </Grid>
            </div>
        </div>
        )
    }
}

export default UserProfileDetails
