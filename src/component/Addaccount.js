import React, { Component } from 'react';
import './task.css'
import { Row,Col} from 'react-bootstrap';
import {TextInput,Select,Button,toaster} from 'evergreen-ui';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
import Cookies from 'universal-cookie';

import moment from 'moment';
import host from '../Tourism/host';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';





class Addaccount extends Component {
    constructor(props){
        super(props);
    this.state={
      data:[],email:'',
      phone:'',licenseDate:'',
      address:'', uptime:'',page_name:'',
        name:'',
        pass:(''),
        pass1:(''),phone:(''),mail:(''),page:('')
        ,file:[]
        ,date:(''), startDate: new Date(),
        rest:''
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
       var pass1=this.state.pass1;
      var pass=this.state.pass;
       var mail=this.state.mail; 
         var page=this.state.page;
      var file=this.state.file;
       var date=moment(this.state.date).format("YYYY-MM-DD");


       var comp_id=this.state.rest;

       let formData = new FormData();
       var headers = {
         "Content-Type": "application/json",
         token: cookies.get("token")
       };
   
   
       formData.append("email", mail);
       formData.append("password", pass);
       formData.append("admin_password", pass1);
       formData.append("phone", phone);
       formData.append("name", name);
       formData.append("license", date);
       formData.append("comp_id", comp_id);
       axios({
         url: host+ `api/v1/auth/regestration`,
         method: "POST",
         data: formData,
           headers: headers
       }) .then(response => {
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

    
        componentDidMount(){  
          axios.get(host +'api/v1/admin/companies' ,{headers:{ token: cookies.get("token") }})
          .then(res=>{console.log(res.data.companies)
            this.setState({
              data:res.data.companies
            })
          })
          .catch(err=>{console.log('error:' + err);
          })
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
  {/* <img src={require('./ss.png')} id="tab" />  */}
  
  </Col> </Row>

  <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  <div id='account'>Add Account</div></Col> </Row> 
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
      <p >License :</p>  

<DatePicker id='date' id='width'
        selected={this.state.startDate}
        onChange={this.handleChange}
      /></div>
     
     <div id='dd'>
    



     <p>Phone :</p>
<TextInput
  name="text-input-name" id='width'
  placeholder="Phone" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
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

<div id='d1'>
      <p>Password :</p>
<TextInput id='width' 
  name="text-input-name"
  placeholder="Password"  required
  value={this.state.pass} onChange={(e)=>{
    this.setState({pass:e.target.value})
      }} />
      </div>
      <div id='d1'>
      <p>Admin password :</p>
          <TextInput id='width'
  name="text-input-name"
  placeholder="Admin-password" 
  required value={this.state.pass1} onChange={(e)=>{
    this.setState({pass1:e.target.value})
      }}/>
      </div>
     

  

   
    
      
 
</Col>

</Row>

<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t11" sm={12} >
     <div id='d3'>
  


<p >Chose Restaurant:</p>  
    
   
    
    
 
    <Select  id='width' value={this.state.rest} onChange={(e)=>{
      console.log(e.target.value)
this.setState({rest:e.target.value})
 }} >
   <option value={"Select"}>Select Res</option>
   {this.state.data.map((item =>

<option value={item._id}>{item.name}</option>

   ))}
</Select>



      </div> 

      
   </Col> </Row>



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

export default Addaccount;
