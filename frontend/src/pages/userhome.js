import * as React from "react";
import './userhome.css';
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// import AuthContext from "../contexts/authContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from "@mui/material";
import img1 from "../images/logo.svg";
import budget from '../images/budget.png';
import diet from '../images/diet.png';
import event from '../images/event.png';
import expense from '../images/expense.png';
import financial from '../images/financial.png';
import retirement from '../images/retirement.png';


import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../features/userSlice"




const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];



function SimpleDialog(props) {
  const { onClose, selectedValue, open, handleTask } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select your option</DialogTitle>
      <List sx={{ pt: 0 }}>
      <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleTask()}
          >
           <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary="Professional Task" />
          </ListItemButton>
        </ListItem>

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Personal Task" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};







const UserHomePage = ({ userName }) => {
  const dispatch = useDispatch()

  const history = useHistory();




  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = useSelector(selectUser);
  const str = user.userName;
  let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

  // const ctx = React.useContext(AuthContext);



  // let navigate = useNavigate();

  const handleTask = () => {
    history.push("/task")
  }
  const handleDiet = () => {
    history.push("/diet")
  }
  const handleLogout = async (e) =>{
    e.preventDefault();
    await fetch("http://127.0.0.1:5555/api/v1/users/logout",{
        method:"POST",
        withCredentials: true,
        headers:{
            "Content-Type":"application/json"
        },
    });

    // ctx.logout()
    dispatch(logout());
    history.push('/');

}


const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value) => {
  setOpen(false);
};


  return (
    <>
    <AppBar position="static" style={{backgroundColor:"#1D3557" , color:"#F1FAEE"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={img1} />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={img1} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar style={{backgroundColor:"#1976D2", color:"#F1FAEE", fontFamily:"Raleway", fontWeight:"800"}}>{acronym}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem key={settings[0]}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]}>
                <Typography textAlign="center">{settings[1]}</Typography>
              </MenuItem>
              <MenuItem key={settings[2]} onClick={handleLogout}>
                  <Typography textAlign="center">{settings[2]}</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {/* <hr style={{borderTop:'0.5px soolid #F1FAEE'}}/> */}
    <div className="topComponent">
        <div className="firstline">
        <span>Hi {str}, Welcome back to sMartPlanner. </span>
        <span><Button variant="contained" color="primary" style={{fontWeight:'bold'}}>Join Room</Button></span>
        </div>
        <div style={{paddingBottom:'20px'}}>
            <span style={{fontSize:'large'}}>Templates:</span>
        </div>
        <Grid container spacing={5}>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={budget}
                    style={{height: '160px', width: '160px'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Task Manager 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClickOpen}>Open</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{height: '160px', width: '160px'}}
                    image={diet}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Diet Scheduler
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleDiet}>Open</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{height: '160px', width: '160px'}}
                    image={event}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Event Planner
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{height: '160px', width: '160px'}}
                    image={expense}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Expense Tracker 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{height: '160px', width: '160px'}}
                    image={financial}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Financial Buddy
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={8} sm={4} md={2}>
                <Card style={{backgroundColor:'#F1FAEE', color:'#1D3557', padding: '20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{height: '160px', width: '160px'}}
                    image={retirement}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Retirement Planner
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>

    <SimpleDialog
        open={open}
        onClose={handleClose}
        handleTask={handleTask}
      />
    </>
  )
}

export default UserHomePage