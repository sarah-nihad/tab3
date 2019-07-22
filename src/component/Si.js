import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { Row, Col,Navbar,Nav } from 'react-bootstrap';

import Addtab3 from './Addtab3';
import Resturant from './Resturant';
import Addaccount from './Addaccount';
import Addres from './Addres';
import Users from './Users';
import Delegate from '../Offers/Delegate';
import Tourism from '../Tourism/Tourism';
import { Popover, Pane, Text, Avatar } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
function rendericon(props) {
 
  if (props.match.path === '/Resturant') {
    return ( <Link to='./Addtab3' id='ll'><i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addaccount') {
    return ( <Link to='./Addtab3' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Addtab3') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i> </Link>) 
  }
  
  else if (props.match.path === '/Addres') {
    return ( <Link to='./Addtab3' id='ll'><i className="fas fa-arrow-circle-left" id='ic'></i> </Link>)
  }
  else if (props.match.path === '/Users') {
    return ( <Link to='./Addtab3' id='ll'><i className="fas fa-arrow-circle-left" id='ic'></i> </Link>)
  }
 
}
function renderPage(props) {
  if (props.match.path === '/Addtab3') {
    return (<Addtab3 />)
  }
  else if (props.match.path === '/Resturant') {
    return (<Resturant />)
  }
 
  else if (props.match.path === '/Delegate') {
    return (<Delegate />)
  }
  else if (props.match.path === '/Addaccount') {
    return (<Addaccount />)
  }
  else if (props.match.path === '/Addres') {
    return (<Addres />)
  }
  else if (props.match.path === '/Users') {
    return (<Users />)
  }
  
  
}
const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
   
  
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
   
  },
});

function PermanentDrawerLeft(props) {
  const { classes } = props;


  return (
    <div className={classes.root}  >
      {/* <CssBaseline /> */}
     <AppBar  className={classes.appBar} id='abr' >
       
    
           
            <Navbar  expand="lg" id="navmain">
                 
               
                 <Navbar.Brand >{rendericon(props)}</Navbar.Brand>
             
                      <Nav className="mr-auto">
                   
                      </Nav>
                      
                      <Row style={{marginRight:0}}><Col xs={12}  lg={4} >
                        <div id='ss'>
                    <div id='p1'>Logout</div>  <Popover 
              content={
                <Pane
                  width={200}
                  height={100}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                <button  id='out' onClick={()=>{ 
                  cookies.remove("token");
                  window.location.href= "/"
                }}>Log out</button>
                </Pane>
              }
            >
              <Avatar
                 src={require('./d.jpg' )} 
                name=""
                size={30}
                id='hh'
              />
            </Popover>
            </div>
                         </Col>
                          </Row>
                    
                
                 
              </Navbar>
         
             
        
      
      </AppBar>


 

      <Drawer style={{ backgroundColor: 'white' }}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"

      >
        <div id='jj' >
          <div className={classes.toolbar} />
          {/* <Divider /> */}
          {/* <Link to='./Add' id='ll'>  <List>

            <ListItem button >
              <ListItemIcon><i class="fas fa-user-plus" id='s1'></i></ListItemIcon>
              Add
              <ListItemText />
            </ListItem>

          </List></Link> */}

     

          <Link to='./Users' id='ll'>
            <List>
              <ListItem button >
                <ListItemIcon><i className="fas fa-user" id='s1'></i></ListItemIcon>
                Users
         <ListItemText />
              </ListItem>

            </List></Link>
          <Link to='./Resturant' id='ll'>
            <List>
              <ListItem button >
                <ListItemIcon><i className="fas fa-table" id='s1'></i></ListItemIcon>
                Restaurant
         <ListItemText />
              </ListItem>

            </List></Link>

          {/* <Divider /> */}
        </div>
      </Drawer>



      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderPage(props)}
      </main>

    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);