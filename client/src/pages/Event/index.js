import React from "react";
import eventImg from "../../assests/demoimg.jpg";
import "../../assests/styles/eventStyle.css";
import { useFetch } from "./Backendhooks"; //to handle fetch data request from flask
import axios from 'axios';

// const usersRide = [];
// let i = 0;
// for (i = 1; i <= 2; i++) {
//   usersRide.push(`Carpool ${i}`);
// }

const Event = ({ match }) => {

  const url = "/event/" + match.params.eventid; //URL to fetch event details data from flask/backend server
  //const urlOfferedRides = "/event/rides" + match.params.eventid; //URL to fetch offered rides for the event from flask/backend server


  const [event, hasErrors] = useFetch(url); // to call flask/backend server
  //const [OfferedRides, hasErrors1] = useFetch(urlOfferedRides); //


  const OfferedRides = [{
    "id": 5033135,
    "username": "Geldart Ardelle",
    "Car_model": "Ferrari",
    "no_of_seats": 4
  }, {
    "id": 5033136,
    "username": "Mertel Alberik",
    "Car_model": "BMW",
    "no_of_seats": 7
  }];
  const status = "pending";
  const handleSaveRequest = (rideID) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/saveRequest',
      data: {
        eventID: match.params.eventid,
        RideID: '1234',
        UserID: 'asriva'
      }
    });
  };

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <p className="eventHeading">{event.title}</p>
          <img className="card-img-top" src={event.image} alt="Card cap pic" />
          <br />
          <p>
            Name: <span><em>{event.title}</em></span>
          </p>
          <p>
            Date/Time: <span><em>{event.datetime_local}</em></span>
          </p>
          <p>
            Location: <span> <em>{event.full_address}</em></span>
          </p>
          <p> Performer: <span><em>{event.performers_names}</em> </span> </p>
          <p>
            Desciption: <span><em>{event.description}</em></span>
          </p>
          <br />
          <button type="button" className="btn btn-dark btn-lg ml-4">
            Offer a Ride
            </button>
        </div>

        <div className="col-sm-6">
          <h2 className="h2-request text-center">Request a Ride</h2>
          <ul className="list-group">
            {OfferedRides.map(ride => (
              <li className="list-group-item py-4 bg-info" key={ride.id}>
                <p className="p-rider">{ride.username}</p>
                <p className="p-rider">Car Model: {ride.Car_model}</p>
                <p className="p-rider">Number of seats left: {ride.no_of_seats}</p>
                {status == "pending" &&
                  <p className="label-registered">Already Registered!</p>}
                {status != "pending" &&
                  <button type="button" onClick={() => handleSaveRequest(ride.id)} className="btn btn-dark btn-lg float-right">
                    Request Ride
                </button>}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Event;
