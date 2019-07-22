import React,{Component} from 'react';
import './task.css';
import {Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Row,Col,Navbar,Nav} from 'react-bootstrap';
import { Popover, Pane, Text, Avatar } from 'evergreen-ui';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Home extends Component{

    render(){
        return(
        <div>
        
                  <Navbar  expand="lg" id="nav">
               
               
                 <Navbar.Brand >   <img src={require('./poerd by.png')} id="im" /></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                  {/* <Navbar.Collapse id="basic-navbar-nav">  */}
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
                name="Jeroen Ransijn"
                size={30}
                id='hh'
              />
            </Popover>
            </div>
                         </Col>
                          </Row>
                    
                
                 
              </Navbar>
         
<div id ='card' >             
              
                            <Row style={{marginRight:0}} id='rowcard'>
                
                <Col xs={12} lg={6} id='card11'>
         <Link to ='./Addtab3' id='l' > <Card id='card1'>
 
         <img src={require('./ss.png')} id="tab" />
    {/* <p>Tab3</p> */}
    
   
 
</Card> 
</Link>
</Col>


<Col xs={12} lg={6} id='card22' >
         <Link to ='./Tourism' id='l' > <Card id='card1'>
 
         <img src={require('./plane.png')} id="tab" />
    {/* <p>Tourism</p> */}
    
   
 
</Card> 
</Link>
</Col>
</Row>




            </div>
            </div>

        );
    }
}
export default Home;
