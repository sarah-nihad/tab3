import React, { Component } from 'react';
import '../component/task.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import host from './host'
const cookies = new Cookies();
// const host = 'https://tab3.herokuapp.com/';
class Usertourism extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      email:'',
      passowrd:'',
      phone:'',
      licenseDate:'',
      logo:'',
       adminPassword:'',
       uptime:''
    }
  }


      componentDidMount(){  
        axios.get(host +'api/v1/tourism/' ,{headers:{ token: cookies.get("token") }})
        .then(res=>{console.log(res.data)
          this.setState({
            data:res.data
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
     
      <th>Email</th>
      <th>Phone</th>
      <th>LicenseDate</th>
      <th>uptime</th>
      <th>adminPassword</th>
      {/* <th>Table heading</th> */}
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map((item =>
    <tr >
    
    <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item. licenseDate}</td> 
      <td>{item.uptime}</td>
      <td>{item.adminPassword}</td> 
   
    </tr>
     ))}
   
  </tbody> 
</Table>

      </div>
    );
  }
}
export default Usertourism;
