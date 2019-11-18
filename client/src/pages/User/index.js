import React from 'react';
import userImg from "../../assests/avataar.svg";
import "../../assests/styles/userStyle.css";

const users = {
    name: "Claude Timothy",
    address: "Barbara B. Mann Performing Arts Hall,FL",
    contact: "8457098904",
    email: "ctimothy0@unc.edu",
};

const offeredRide = [];
let i = 0;
for (i = 1; i <= 10; i++) {
    offeredRide.push(`Offer ${i}`);
}

const requestedRide = [];
let j = 0;
for (j = 1; j <= 5; j++) {
    requestedRide.push(`Request ${j}`);
}

const User = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 text-right" >
                    <img class="masthead-avatar mb-5" src={userImg} alt="" />
                </div>
                <div className="user-data col-sm-4">
                    <p class="masthead-name text-uppercase mb-2 mt-4" >{users.name}</p>
                    <p class="mb-2">{users.contact}</p>
                    <p class="mb-2">{users.email}</p>
                    <p class="mb-2">{users.address}</p>
                </div>
                {/* <div className="col-sm-4 justify-content-center align-self-center">
                    <button type="button" class="btn btn-dark btn-lg">
                        Edit Details
                     </button>
                </div> */}
            </div>
            <div className="row mt-5 w-75 mx-auto">
                <div class="col-lg-6 lg-offset-6">
                    <div class="user-offered-rides">
                        <p className="heading-req">Requests Received</p>
                        <ul class="list-group">
                            {offeredRide.map(ride => (
                                <li class="list-group-item bg-light">
                                    <span class="float-left p-rider">{ride}</span>
                                    <button type="button" class="btn btn-dark btn-sm float-right font-weight-bold">
                                        Decline
                                        </button>&nbsp;
                                        <button type="button" class="btn btn-dark btn-sm float-right mr-2 font-weight-bold">
                                        Accept
                                        </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 lg-offset-6">
                    <div class="user-requested-rides">
                        <p className="heading-req">Requests Made</p>
                        <ul class="list-group">
                            {requestedRide.map(ride => (
                                <li class="list-group-item bg-light">
                                    <p class="p-rider">{ride}</p>
                                    <p class=" p-rider">Name, address and other details</p>
                                    <span class="text-warning float-right">Pending</span>
                                    <span class="text-danger float-right mr-2">Declined</span>
                                    <span class="text-success float-right mr-2">Accepted</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default User;