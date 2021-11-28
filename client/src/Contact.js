import React from 'react';
import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white", 
  },
  
  title: {
    flexGrow: 1,
    color: "#12225e",
  },
  navbar: {
    backgroundColor: "white",
    display: "flex",
  },
  logo: {
    height: "20px",
    width: "110px",
  },
  signin: {
    borderBox: "#2991d6",
    borderRadius: "20px",
    color: "#2991d6",
  }, 
  contactImage: {
    width: "600px",
    height: "400px",
    borderRadius: "20px",
  },
  imgdiv: {
    margin: "auto",
  },
  fname: {
    width: "48%",
    marginRight: "7px",
    },
  sname: {
    width: "48%",
    marginLeft: "7px",
    borderColor: "white",
  },
  container: {
    backgroundColor: "#12225e",
    height: "600px",
    display: "flex",
    margin: "auto",
  },
  contactForm: {
    margin: "auto",
    width: "80%",
  },
  paper: {
    height: "500px",
  },
  contactbtn: {
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#2991d6",
  },
  icon: {
    color: "black",
    justifyContent: "flex-end"
  },
  toplinks: {
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    margin: "auto",
  }
}));

const contact = [
  {
      value: "Subject",
      label: "Careers",
  },
  {
      value: "Subject",
      label: "Services",
  },
  {
      value: "Subject",
      label: "Industries",
  },
]

function Contact() {
    const classes = useStyles();
    const [chooseSubject, setChooseSubject] = useState('');
    const [input, setInput] = useState({
      fname: '',
      surname: '',
      email: '',
      subject: '',
      message: '',
    })

    const handleEvent = (event) => {
        setChooseSubject(event.target.value);
      };

  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newContact = {
      fname: input.fname,
      surname: input.surname,
      email: input.email,
      subject: input.subject.toString(),
      message: input.message,
    }
   
    axios.post("http://localhost:3002/create", input) 
      .then((response) => {
      console.log(response)
      }).catch(err => console.log(err))
  }

    return(
<div>
 <div className={classes.root}>
      <AppBar position="static" elevation={1}>
        <Toolbar className={classes.navbar}>
          <img className={classes.logo} src="datacom.png" alt="logo"/>
          <div className={classes.toplinks}>
          <Typography variant="subtitle1" className={classes.title}>
            Solutions
          </Typography>&nbsp
          <Typography variant="subtitle1" className={classes.title}>
            Industries
          </Typography>&nbsp
          <Typography variant="subtitle1" className={classes.title}>
            Discover
          </Typography>&nbsp
          <Typography variant="subtitle1" className={classes.title}>
            About Us
          </Typography>&nbsp
          <Typography variant="subtitle1" className={classes.title}>
            Careers
          </Typography>
          </div>
          <Button className={classes.signin} variant="outlined" color="primary">
            Sign In
          </Button>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon className={classes.icon} fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>

      <Grid className={classes.container} container={true} spacing={3}>
      <Grid className={classes.contactForm} item={true} xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h2">Get in touch</Typography>
          <Typography variant="body2">Do you have a question? Want to learn more about our products and solutions? We're here to help.</Typography><br/>
      <form className={classes.contactForm} noValidate autoComplete="off">
      <TextField InputProps={{className: classes.input}} 
          className={classes.fname} 
          onChange={handleChange}
          id="outlined-basic" 
          margin="normal" 
          label="First Name" 
          variant="filled" 
          name="fname"
          value={input.fname}/>
      <TextField className={classes.sname} 
           onChange={handleChange}
          id="outlined-basic" 
          margin="normal" 
          label="Surname" 
          variant="filled" 
          name="surname"
          value={input.surname}/>
      <TextField id="outlined-basic" 
           onChange={handleChange}
          margin="normal" 
          fullWidth 
          type="email" 
          label="Email Address" 
          variant="filled" 
          name="email"
          value={input.email}/>
      <TextField id="outlined-basic" 
            onChange={handleChange}
            margin="normal" 
            select
            fullWidth label="Subject" 
            variant="filled"
            name="subject"
            value={input.subject}
            value={chooseSubject}
            onChange={handleEvent}>
            {contact.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
      
      <TextField
          id="outlined-textarea"
          onChange={handleChange}
          label="Message"
          multiline
          margin="normal"
          fullWidth
          variant="filled"
          name="message"
          value={input.message}
        />
        <Button className={classes.contactbtn} 
          variant="contained"
          onClick={handleClick}>
            Contact Us
        </Button>
    </form>
    </Paper>
      </Grid>



      <Grid className={classes.imgdiv} item={true} xs={6}>
        <img className={classes.contactImage} src="contact.jpeg" alt="contactimage"/>
      </Grid>
      </Grid>
      </div>
    )
}

export default Contact