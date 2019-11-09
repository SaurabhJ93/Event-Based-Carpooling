import React from "react";
import eventImg from "../../assests/demoimg.jpg";
// import { useState, useEffect } from "react";
import "../../assests/styles/eventStyle.css";
import { useFetch } from "./Backendhooks"; //to handle fetch data request from flask
import axios from "axios";
import Moment from "moment";

const Event = ({ match }) => {

  const eventId = match.params.eventid; //URL to fetch event details data from flask/backend server

  const [event, Rides, hasErrors] = useFetch(eventId); // to call flask/backend server

  const handleSaveRequest = (e, rideId, eventId) => {

    const userId = 'amertel12'; //Hardcoded logged In user ID

    axios({
      method: 'POST',
      url: 'http://localhost:5000/saveRequest',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      data: {
        eventId: eventId,
        userId: userId,
        rideId: rideId
      }
    }).then((response) => {

      // Hide the button clicked and display with a "Already Registered" label
      // if successfully inserted the data
      console.log(response);
      e.target.classList.add('d-none');
      e.target.nextElementSibling.classList.add('d-block');
    }, (error) => {

      // Show error on failed insert
      console.log(error);
      document.getElementsByClassName('span-error')[0].classList.add('d-block');
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
          {/* <button type="button" className="btn btn-dark btn-lg ml-4">
            Offer a Ride
            </button> */}
        </div>

        <div className="col-sm-6">
          <h2 className="h2-request text-center">Request a Ride</h2>
          <span className="d-none ml-2 text-center font-weight-bold span-error">Oops...Seems like some error occured!Try again. </span>
          <ul className="list-group">
            {Rides.map((ride) => (
              <li className="list-group-item py-4 bg-info shadow mb-3 rounded" key={ride.RIDE_ID}>
                <p className="p-rider"> Rider:
                 <span className="ml-2">{ride.RIDE_HOST_USERNAME}</span>
                </p>
                <p className="p-rider">Start Date:
                <span className="ml-2">{Moment(ride.START_TIME).format('MMM-DD-YYYY')}</span>
                </p>
                <p className="p-rider">Start Time:
                <span className="ml-2">{Moment(ride.START_TIME).format('hh:mm')}</span>
                </p>
                {ride.STATUS == 'pending' ?
                  <span className="ml-2 float-right span-reqested">Already Requested! </span> :
                  <>
                    <button type="button" onClick={(e) => handleSaveRequest(e, ride.RIDE_ID, match.params.eventid)} className="btn btn-dark btn-lg float-right">
                      Request Ride
                     </button>
                    <span className="d-none ml-2 float-right span-reqested">Requested! </span>
                  </>
                }
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Event;
