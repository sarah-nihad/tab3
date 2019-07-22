import React, { Component } from 'react';
import './task.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import host from '../Tourism/host';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// const host = 'https://tab3.herokuapp.com/';
class Users extends Component {
  constructor(){
    super();
    this.state={
      data:[],name:'',email:'',
      phone:'',licenseDate:'', adminPassword:''
    }
  }


      componentDidMount(){  
        axios.get(host +'api/v1/admin/accounts/' ,{headers:{ token: cookies.get("token") }})
        .then(res=>{console.log(res.data.companies)
          this.setState({
            data:res.data.companies
          })
        })
      .catch(err => {
        console.log('error:' + err);
      })
  }
  render() {
    return (
      <div>


<Table responsive="lg" striped bordered hover variant="" id='t1'>
  <thead>
   
    <tr>
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>LicenseDate</th>
      <th>adminPassword</th>
      {/* <th>Table heading</th> */}
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map((item =>
    <tr >
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.licenseDate}</td> 
      <td>{item.adminPassword}</td>
    
    </tr>
     ))}
   
  </tbody> 
</Table>

      </div>
    );
  }
}
export default Users;
