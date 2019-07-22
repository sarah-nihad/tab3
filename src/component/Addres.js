import React, { Component } from 'react';
import './task.css'
import { Row,Col,Form,InputGroup } from 'react-bootstrap';
import {TextInput,Select,Button,toaster,FilePicker } from 'evergreen-ui';
import host from '../Tourism/host';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
 const cookies =new Cookies();


class Addres extends Component {
    constructor(props){
        super(props);
    this.state={
        name:'',
      
     phone:(''),email:'',page_name:('')
        ,file:[]
        ,
        rest:'',
        discount:''
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

      
      var name=this.state.name;
       var phone=this.state.phone; 
    
       var email=this.state.email; 
         var page_name=this.state.page_name;
      var file=this.state.file;
    
       var discount=this.state.discount;


       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
       formData.append("email", email);
  
       formData.append("page_name", page_name);
       formData.append("phone", phone);
       formData.append("name", name);
       formData.append("file", file);
       formData.append("discount", discount);
     
       axios({
         url:host+ `api/v1/usrs/add`,
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
  <div id='account'>Add Restaurant</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center" id="row1">
<Col  id='c2' sm="12" lg="6" >


<div id='dd'>

      <p>Email :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="email" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
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
      <p>Discount :</p>
<TextInput id='width'
  name="text-input-name"
  placeholder="Discount" 
  required value={this.state.discount} onChange={(e)=>{
    this.setState({discount:e.target.value})
      }}/>
      </div>
 
     
    



 </Col>
 <Col  id='cc' sm="12" lg="6" >

 <div id='d1'>
      <p>User Name :</p>
 <TextInput id='width'
  name="text-input-name"
  placeholder="User Name" 
  required value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}
/>
</div>

<div id='dd'>
      <p>Page Name :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="Page_name" 
  required value={this.state.page_name} onChange={(e)=>{
    this.setState({page_name:e.target.value})
      }}
/>
</div>
<div id='d1'>
      <p >Insert Logo :</p>
<FilePicker  id='width'
  multiple
 
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



    );
  }
}

export default Addres;
