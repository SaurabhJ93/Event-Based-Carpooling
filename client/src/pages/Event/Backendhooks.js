import { useState, useEffect } from "react";

function useFetch(eventId) {

  const [Event, setEvent] = useState([]);
  const [Rides, setRides] = useState([]);
  const [haserrors, setErrors] = useState(true);
  const [haserrors1, setErrors1] = useState(true);

  useEffect(() => {

    async function fetchData() {
      let params = new URLSearchParams({ "userId": 'amertel12' }).toString(); //hardcoded user need to change to capture user who is logged in
      const response = await fetch("/event/" + eventId, { method: 'GET', mode: 'cors' }); //awaiting for fetch to retrieve 
      const response1 = await fetch("/event/rides/" + eventId + "?" + params, { method: 'GET', mode: 'cors' }); //awaiting for fetch to retrieve 
      console.log();

      response.json() // converting response to json format
        .then(response => setEvent(response)) //sending data to Event variable
        .catch(err => setErrors(err)) // to send errors if there are any

      response1.json() // converting response1 to json format
        .then(response1 => setRides(response1)) //sending data to Rides variable
        .catch(err1 => setErrors1(err1)) // to send errors if there are any

    }

    fetchData();

  }, [eventId]);

  return [Event, Rides, haserrors, haserrors1];
}


export { useFetch };