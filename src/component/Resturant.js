import React,{Component} from 'react';
import './task.css';
import {Table} from 'react-bootstrap';
import host from '../Tourism/host';
import axios from 'axios';
import Cookies from 'universal-cookie';
 const cookies =new Cookies();
// const host='https://tab3.herokuapp.com/';

class Resturant extends Component{
  constructor(){
    super();
    this.state={
      data:[],name:'',email:'',
      phone:'',licenseDate:'',
      address:'', uptime:'',page_name:''
    }
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
    render(){
        return(
            <div>
              <Table responsive="lg" striped bordered hover variant="" id='t1'>
  <thead>
   
    <tr>
      <th> email</th>
      <th> name</th>
      <th>Phone</th>
      <th>page_name</th>
      {/* <th>Table heading</th> */}
    
    </tr>


  </thead>
 <tbody>
 {this.state.data.map((item =>
    <tr key>
      <td>{item.email}</td>
      <td>{item. name}</td>
      <td>{item.phone}</td>
      <td>{item.page_name}</td>
     
    
    </tr>
     ))}
   
  </tbody> 
</Table>

            </div>
        );
    }
}
export default Resturant;
