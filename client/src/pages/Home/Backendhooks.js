import { useState, useEffect } from "react";

function useFetch(url) {
  const abortController = new AbortController();
  const [Events, setEvents] = useState([]);
  const [haserrors, setErrors] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url,{method: 'GET',mode: 'cors', signal: abortController.signal}); //awaiting for fetch to retrieve 
      response
        .json() // converting response to json format
        .then(response => setEvents(response["events"])) //sending data to Events variable
        .catch(err => setErrors(err)) // to send errors if there are any
    }
    fetchData();
  }, []);
  
  return [Events, haserrors];

}


export { useFetch };