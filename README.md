# Event Based Car pooling application - SSDI College Project

About: This is a Car pooling platform based on popular events in your vicinity. One can Request/Offer a ride based on event he/she wishes to attend.

Functionality:
- Users can search for events based on various filters like date, location, artist or simple text.
- The app displays current upcoming events from SeatGeek platform via the API.
- Logged in users can offer or request a ride for a particular event.
- User page shows the details of all the requested and offered rides to a user. They can check the status of requested rides and accept/decline requests for rides they have offered.

Tech stack used:
- React with create react app for frontend.
- Flask for backend server operations and API creation.
- MySQL on RDS AWS for database.

Pages Preview:

Setup:
Backend Setup

Make sure You have venv setup in the local SSDI_project/server/ 
if don't please do the following

py -3 venv venv

Then install required packages using below command
pip install -r requirements.txt

Once installation is done, start the server by running below command by 
py index.py

you can access it in below address
http://localhost:5000/

Connecting to SeatGeek using clientID in Api_config.json file
