import React,{Component} from 'react';
import './task.css';
import {Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Row,Col} from 'react-bootstrap';
class Addtab3 extends Component{

    render(){
        return(
            <div id='cardtab3'>
              <Row style={{marginRight:0}} id='rowcard'>
                
                <Col xs={12} xl={6} id='card222'>
         <Link to ='./Addaccount' id='l' > <Card id='card1'>
 
 
    <p>Add Account</p>
    
   
 
</Card> 
</Link>
</Col>
<Col  xs={12} xl={6}  id='card222'>
<Link to ='./Addres' id='l'>
       <Card id='card1'>
 
 
 <p>Add Restaurant</p>
 


</Card> 
</Link>
</Col>




</Row>
{/* 
<Row style={{marginRight:0}}>
                
                <Col xs={12} lg={6} id='card11'>
         <Link to ='./Tourism' id='l' > <Card style={{ width: '280px',height:'150px' }}id='card1'>
 
 
    <p>Add Tourism</p>
    
   
 
</Card> 
</Link>
</Col>
<Col  xs={12} lg={6} id='card22'>

       <Card style={{ width: '280px',height:'150px' }}id='cardnone'>
 
</Card> 

</Col>



</Row> */}

            </div>


        );
    }
}
export default Addtab3;
