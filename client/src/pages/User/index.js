import React , {Component} from 'react';
//import userImg from "../../assests/avataar.svg";
import "../../assests/styles/userStyle.css";
import jwt_decode from 'jwt-decode'
import background from "../../assests/background-event.jpg";
import styled from "styled-components";
import Avatar ,{ ConfigProvider } from 'react-avatar';





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