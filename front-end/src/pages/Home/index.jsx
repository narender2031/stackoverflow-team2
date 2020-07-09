import React, { Component } from 'react';
import './home.css';

import Navbar from '../../components/Common/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import UploadPost from '../UploadPost/UploadPost';
import PostComponent from '../../components/PostComponent/PostComponent';
import { getAllPosts } from '../../services/post'




//  flex styles

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


class Home extends Component{
   

  handleChangeText=(ev)=>{
    console.log(ev.target.value);
    this.setState({
      text : ev.target.value
    })
  }


  
    constructor(props) {
      super(props);
      this.state = { 
        posts : [],
        comment :''
       };
    }
  

    
    
    componentDidMount(){

      
      getAllPosts().then(res=>{

        let localStorageUser = localStorage.getItem('user')
        let u_id = JSON.parse(localStorageUser).id
        let arr =[]
        res.data.map(val=>{
        
          
          if(val._id != u_id){
            arr.push(val)

          }
       
          
          
        })
        this.setState({
          posts: arr
        })
        
      })
    
    
    }
    
    render() {
        const { classes } = this.props; 
        return(
          <div>
             <Navbar/>
            <div className={classes.root}>
                {/* Include the navbar */}

               

                {/* Breadcrumbs sections */}
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '80px'}}>
            
              
      
  
                </Breadcrumbs>  


                <Grid container style={{
                margin: 0,
                width: '100%',
                }} spacing={2}>

<Grid item xs={12} sm={12} md={12}>
            
            <Card className={classes.root} style={{ marginTop: '10px' }}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Feed (You can only see other's posts here)
              </Typography>

     <hr/>
          {this.state.posts?
          this.state.posts.map((data,key)=>{
            return (
          <PostComponent
          key={key}
          data={data}
          
          />
            )
          })
             :''
    }
              



              </CardContent>
              

            </Card>


          </Grid>

      
        
      
      </Grid>
  </div>
  </div>
  );
}
}

export default withStyles(useStyles, { withTheme: true })(Home);