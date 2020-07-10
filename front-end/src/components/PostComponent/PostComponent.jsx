import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export class PostComponent extends Component {
    render() {        
        return (
            <div key={this.props.keyVal}>   
            <div className="question-section"> 
         
          <div className="question">
          <Typography variant="h6">
                {this.props.data.user_heading}
          </Typography>
          <Typography variant="h6" gutterBottom>
                {this.props.data.user_text}
          </Typography>
          <Typography variant="h5">
               
          </Typography>
          <br/>
            <TextField 
                 
                  label="You can comment here"
                  multiline
                  rows="2"
                  variant="outlined"
                 style={{ width: '100%', marginBottom: '20px'}} /><br/>
      
            <Button variant="outlined" size="large" style={{float: 'right'}}
            >
                  Submit
            </Button>
          <br/>
        
          </div>
          
         
          <br/>
          <br/>
         
          </div>
          <hr/>
          </div>
        )
    }
}

export default PostComponent
