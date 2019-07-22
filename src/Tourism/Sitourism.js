
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Assignment from '@material-ui/icons/Assignment';
import Hearing from '@material-ui/icons/Hearing';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Place from '@material-ui/icons/Place';
import Category from '@material-ui/icons/Category';
import Person from '@material-ui/icons/Person';
import Tourism from './Tourism';
import Usertourism from './Usertourism';
// import Border_all from '@material-ui/icons/Border_all';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import { Row, Col,Navbar,Nav } from 'react-bootstrap';
import Toolbar from '@material-ui/core/Toolbar';
import { Popover, Pane, Text, Avatar } from 'evergreen-ui';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
function rendericon(props) {
 
  if (props.match.path === '/Tourism') {
    return ( <Link to='./Home' id='ll'><i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
  else if (props.match.path === '/Usertourism') {
    return ( <Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }
 
 
}

  

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
   

      <div className={classes.root} >

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} id='abr' >
         
           
       
          <Navbar  expand="lg" id="navmain">
                 
          <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
                 <Navbar.Brand >{rendericon(this.props)}</Navbar.Brand>
             
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
                 src={require('../component/d.jpg' )} 
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

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}

            >
              <div id='jj'>
                <div ></div>
                <div className={classes.toolbar} />
                <Link to='/Usertourism'>
                  <List>

                    <ListItem button>
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>{<Person />}</ListItemIcon>
                      <ListItemText><span style={{ color: 'white', fontWeight: 'bold' }}>Users</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>
           
              
              
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer 
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
              
            >
              <div id='jj' >
               
                <div className={classes.toolbar}   />

                <Link to='/Usertourism'>
                  <List>
                    <ListItem button >
                      <ListItemIcon style={{ color: 'white', paddingLeft: 30 }}>{<Person />}</ListItemIcon>
                      <ListItemText><span style={{ color: 'white', fontWeight: 'bold' }}>Users</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>
             
              
              </div>
            </Drawer>
          </Hidden>

        </nav>

        <main className={classes.content}>

          <div className={classes.toolbar} />
          {renderPage(this.props)}
        
        </main>
      </div>

    )
  }
  
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {
 
  if (props.match.path === '/Tourism') {
    return (<Tourism />)
  }
  else if (props.match.path === '/Usertourism') {
    return (<Usertourism />)
  }
}
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);



