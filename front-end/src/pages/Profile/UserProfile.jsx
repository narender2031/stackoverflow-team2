import React, { Component } from 'react';
import Navbar from '../../components/Common/Navbar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { MentionsInput, Mention } from 'react-mentions'
import TextField from '@material-ui/core/TextField';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import BookIcon from '@material-ui/icons/Book';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';



import SwipeableViews from 'react-swipeable-views';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {getAllProfile, getExactProfile} from '../../services/profile'
import { getExactUserPost } from '../../services/post'

import './userProfile.css';
import UserProfileDetails from '../../components/ProfileDetails/UserProfileDetails';
import PostComponent from '../../components/PostComponent/PostComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
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

export default function UserProfile() {

        let [name,setName] = React.useState('')
        let [username,setUsername] = React.useState('')
        let [myPosts, setMyPosts] = React.useState([])
        let localStorageUser = localStorage.getItem('user')
        let u_id = JSON.parse(localStorageUser).id


        React.useEffect(()=>{
          getExactUserPost({user_id: u_id})
          .then((res)=> setMyPosts(res.data))


        },[]) 

        React.useEffect(()=>{
          getAllProfile().then(res=>{
            res.data.map(data=>{
              if(data._id == u_id)
              {
                setName(data.name)
                setUsername(data.username)
              }
              
            })
            // console.log(res);
            
            
          })

        },'') 

      


        // getAllProfile().then(res=>{
        //   res.data.map(data=>{
        //     if(data._id == u_id)
        //     {
        //       setName(data.name)
        //       setUsername(data.username)
        //     }
            
        //   })
        //   // console.log(res);
          
          
        // })

        
      



    
  
        const [value, setValue] = React.useState(0);
        const theme = useTheme();

        const classes = useStyles();


        const handleChange = (event, newValue) => {
        setValue(newValue);
        };
    
        const handleChangeIndex = (index) => {
        setValue(index);
        };

        return (
            <div>
                <Navbar/>
                <UserProfileDetails
                name={name}
                username={username}
                
                />
                <div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    
                    >
                    <Tab label="Posts" wrapped icon={<BookIcon />} {...a11yProps(0)}/>
                    
                    <Tab label="Followers" wrapped icon={<PeopleAltIcon />} {...a11yProps(2)} />
                    <Tab label="Following" wrapped icon={<GroupAddIcon />} {...a11yProps(3)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                    <p>Your Posts</p>



                    {
                      myPosts.length ===0 ? '' : 

                      myPosts.map((data,key)=>{
                        return(
                        <PostComponent
                        key={key}
                        data={data}
                        
                        />
                        )
                        

                      })
                    }


                 

                    </TabPanel>
                    
                   
                </SwipeableViews>
 
                

                </div>
            </div>
        )
    
}

