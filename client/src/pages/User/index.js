import React , {Component} from 'react';
//import userImg from "../../assests/avataar.svg";
import "../../assests/styles/userStyle.css";
import jwt_decode from 'jwt-decode'
import background from "../../assests/background-event.jpg";
import styled from "styled-components";

const Styles = styled.div`
 .jumbo{
    // background: url(${background}) no-repeat fixed bottom;
    background-color: #7eb3c794;
    color:black;
    margin-top: 0px;
    margin-bottom: 5px;
    max-width: 80%;
    margin-left: 12%;
    &:hover{
        background-color: #69a8af;
    }
 };
 .container{
    background: url(${background}) no-repeat fixed bottom;
    max-width: inherit;
    min-height: 85vh;
    padding-right: 350px;
    padding-left: 350px;
    margin-right: auto;
    margin-left: auto;
 };

 .jumbo h2{
  font-size: 30px;
  }

 .jumbo p{
   font-size: 18px;
  }

 .jumbo li{
   list-style-type: none;
  }`;

// const users = {
//     name: "Infinitys end",
//     address: "9201 University City Blvd",
//     contact: "8457098904",
//     email: "infinitysend@ymail.com",
// };

// const offeredRide = [];
// let i = 0;
// for (i = 1; i <= 10; i++) {
//     offeredRide.push(`Offer ${i}`);
// }

// const requestedRide = [];
// let j = 0;
// for (j = 1; j <= 5; j++) {
//     requestedRide.push(`Request ${j}`);
// }

// const User = () => {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-sm-4 text-right" >
//                     <img class="masthead-avatar mb-5" src={userImg} alt="" />
//                 </div>
//                 <div className="user-data col-sm-4">
//                     <p class="masthead-name text-uppercase mb-2 mt-4" >{users.name}</p>
//                     <p class="mb-2">{users.contact}</p>
//                     <p class="mb-2">{users.email}</p>
//                     <p class="mb-2">{users.address}</p>
//                 </div>
//                 {/* <div className="col-sm-4 justify-content-center align-self-center">
//                     <button type="button" class="btn btn-dark btn-lg">
//                         Edit Details
//                      </button>
//                 </div> */}
//             {/* </div> */}
//             {/* <div className="row mt-5 w-75 mx-auto">
//                 <div class="col-lg-6 lg-offset-6">
//                     <div class="user-offered-rides">
//                         <p className="heading-req">Your Offered Rides</p>
//                         <ul class="list-group">
//                             {offeredRide.map(ride => (
//                                 <li class="list-group-item bg-light">
//                                     <span class="float-left p-rider">{ride}</span>
//                                     <button type="button" class="btn btn-dark btn-sm float-right font-weight-bold">
//                                         Decline
//                                         </button>&nbsp;
//                                         <button type="button" class="btn btn-dark btn-sm float-right mr-2 font-weight-bold">
//                                         Accept
//                                         </button>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div> */}
//                 {/* <div class="col-lg-6 lg-offset-6">
//                     <div class="user-requested-rides">
//                         <p className="heading-req">Your Requested Rides</p>
//                         <ul class="list-group">
//                             {requestedRide.map(ride => (
//                                 <li class="list-group-item bg-light">
//                                     <p class="p-rider">{ride}</p>
//                                     <p class=" p-rider">Name, address and other details</p>
//                                     <span class="text-warning float-right">Pending</span>
//                                     <span class="text-danger float-right mr-2">Declined</span>
//                                     <span class="text-success float-right mr-2">Accepted</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// };
class User extends Component {
    constructor() {
      super()
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        errors: {}
      }
    }
  
    componentDidMount() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.identity.first_name,
        last_name: decoded.identity.last_name,
        email: decoded.identity.email
      })
    }
  
    render() {
      return (
        <Styles>
        <div className="container">
          <div className="jumbotron mt-1">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">User Profile</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>Fist Name</td>
                  <td>{this.state.first_name}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{this.state.last_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </Styles>
      )
    }
  }
export default User;