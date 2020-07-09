import React, { Component } from 'react'
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { savePost } from '../../services/post'
import { getAllProfile } from '../../services/profile'
import Select from '@material-ui/core/Select';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../components/Common/Navbar'
import axios from 'axios'
import { MentionsInput, Mention } from 'react-mentions'
import './UploadPost.css'
const baseURL_USERS_EXCEPT_ME = `${process.env.REACT_APP_API}/users/usersExceptMe`;

const postURL = `${process.env.REACT_APP_API}/users/add-post`;

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
  }));
export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          open:false,
         user_id:'',
          user_heading : '',
          user_text : '',
          users :[
          ]
         };
    this.handleChange = this.handleChange.bind(this);
      }
      handleChange=(key, event)=> {
        this.setState({
          [key]: event.target.value,
        });
      }
      handleClose = () => {
        this.setState({
          open: false
        })
      };
      
      componentDidMount(){
        let localStorageUser = localStorage.getItem('user')
        let u_id = JSON.parse(localStorageUser).id
        this.setState({
            user_id : u_id
        })

        getAllProfile().then(res=>{
          let arr= []
          res.data.map(val=>{
            if(val._id!=u_id){
              arr.push(val.name)
            }
          })
      
          
          this.setState({
            users : arr
          })
          
        })
      }
   
    saveMyPost = () => {
        let newComment = this.state.user_text;
        newComment = newComment.split('@@@__').join("<a href=\"/user/")
        newComment = newComment.split('^^^__').join("\">")
        newComment = newComment.split('@@@^^^').join("</a>");
        if (newComment != '') {
          let comment = newComment.trim();
          const post ={
              user_id: this.state.user_id,
                user_text:this.state.user_text,
                user_heading : this.state.user_heading,
          }
          
        savePost(post).then(res=>{
          if(res.status ===200){
            this.setState({
              open: true
            })
          }
          
        })




          console.log(this.state);
          
          this.setState({
            user_text: '',
            user_heading:''
          })
        }
      }
    render() {
        const { classes } = this.props; 
        return (
            <div>
                 <Navbar/>
                 <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your post has been updated. Want to Post again?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">
          <NavLink className="nav-link" to="/">
          Disagree
              </NavLink>
            
          </Button>
          <Button onClick={this.handleClose}  color="primary" autoFocus >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
                 <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '80px'}}>
            
              
      
  
            </Breadcrumbs>  
<Grid item  md={12}>
            
            <Card className={classes.root} style={{ marginTop: '10px' }}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Post
              </Typography>
              <hr/>
          

              <div className="question-section"> 
              {/* question 1 */}
              <div className="question">
              <Typography variant="h5">
                    Heading
              </Typography>
              <TextField 
              value={this.state.user_heading} 
                     onChange={(ev) => this.handleChange('user_heading', ev)}
                    label="Type your text here..."
                    multiline
                    rows="1"
                    variant="outlined"
                   style={{ width: '100%', marginBottom: '10px',marginTop:'20px'}} /><br/>
          
              </div>
              <div>
              <Typography variant="h5" gutterBottom>
                    Text
              </Typography>
             
              <MentionsInput className='comments-textarea' placeholder="Add text" value={this.state.user_text} onChange={(event) => this.setState({ user_text: event.target.value })}
              >
  <Mention
    trigger="@"
    markup='@@@____id__^^^____display__@@@^^^'
    displayTransform={this.handleDisplayTextForMention}
    data={this.state.users}
   
  />
</MentionsInput>
      
      </div>
      <br/>
  
      
  
              <Button variant="outlined" size="large" style={{float: 'right'}} 
              onClick={()=> this.saveMyPost()}
              >
                    Submit
              </Button>
              
             
              <br/>
              </div>
              </CardContent>
              

            </Card>


          </Grid>

          
            </div>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(Post);
