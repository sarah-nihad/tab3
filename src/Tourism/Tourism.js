import React, { Component } from 'react';
import '../component/task.css';
import { Row,Col,Form,InputGroup } from 'react-bootstrap';
import {TextInput,Select,Button,toaster,FilePicker } from 'evergreen-ui';
import Sitourism from './Sitourism';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import host from './host';
import Cookies from 'universal-cookie';

import moment from 'moment';

 const cookies =new Cookies();

//  const host='https://tab3.herokuapp.com/';
class Tourism extends Component {
    constructor(props){
        super(props);
    this.state={
      
        pass:(''),
        pass1:(''),
        phone:(''),
        mail:('')
        ,file:[]
        ,date:(''), startDate: new Date()
      
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
      this.setState({
        startDate: date,
        date
      });
    }

    login(){

       var phone=this.state.phone; 
       var pass1=this.state.pass1;
      var pass=this.state.pass;
       var mail=this.state.mail; 
      var file=this.state.file;
       var date=this.state.date;
       var date=moment(this.state.date).format("YYYY-MM-DD");


       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
       formData.append("email", mail);
       formData.append("password", pass);
       formData.append("adminPassword", pass1);
    
       formData.append("phone", phone);
      
       formData.append("file", file);
       
       formData.append("license", date);
       axios({
         url: host +`api/v1/tourism/regester`,
         method: "POST",
         data: formData,
           headers: headers
       })
         .then(response => {
          toaster.success('user has been added successfully');

console.log(response)
         })
         .catch(function (error) {
           console.log(error.response.data)
           if (error.response) {
             toaster.danger(error.response.data.mgs);
           }
         });

        }

    


  render() {
    return (
     
   <div>


<div id='rr'>
 <Row style={{marginRight:'0px'}} className="justify-content-md-center">
  <Col id="colimg" xs={12} md={12} lg={12}> 
  {/* <img src={require('./poerd by.png')} id="im" /> */}
  </Col></Row>
<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  {/* <img src={require('./ss.png')} id="tab" /> */}
   </Col> </Row>

   <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  <div id='account'>Add Tourism</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center"id="row1">
<Col  id='c2' sm="12" lg="6" >


<div id='dd'>

      <p>Email :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="email" 
  required value={this.state.mail} onChange={(e)=>{
    this.setState({mail:e.target.value})
      }}/>
      </div>
      <div id='dd'>
      <p>Phone :</p>
<TextInput id='width'
  name="text-input-name"
  placeholder="Phone" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}/>
      </div>

      <div id='dd'>
      <p >License :</p>  

<DatePicker id='date' id='width'
        selected={this.state.startDate}
        onChange={this.handleChange}
      /></div>
     
    



 </Col>
 <Col  id='cc' sm="12" lg="6" >

 <div id='d1'>
 <p>Admin password :</p>
          <TextInput id='ooo'
  name="text-input-name"
  placeholder="Admin-password" 
  required value={this.state.pass1} onChange={(e)=>{
    this.setState({pass1:e.target.value})
      }}/>
</div>

<div id='dd'>
<p>Password :</p>
<TextInput id='ooo'
//  id='width'
  name="text-input-name"
  placeholder="Password"  required
  value={this.state.pass} onChange={(e)=>{
    this.setState({pass:e.target.value})
      }} />
</div>
<div id='d1'>
      <p >Insert Logo :</p>
<FilePicker 
  multiple
  id='width'
 
  marginBottom={32}
  onChange={files => 
    this.setState({file:files[0]})
  }
/>
</div>
     



   
    
      
 
</Col>

</Row>
<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t1" >
 <Button  appearance="primary" intent="warning" id='blogin'
         onClick={()=>this.login()}>Save</Button> 
   </Col> </Row>



</div>
    

    
</div>

</div>

    );
  }
}

export default Tourism;
