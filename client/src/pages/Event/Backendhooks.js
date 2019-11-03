import { useState, useEffect } from "react";

function useFetch(url) {
  const [Event, setEvent] = useState([]);
  const [haserrors, setErrors] = useState(true);
  
  try {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url,{method: 'GET',mode: 'cors'}); //awaiting for fetch to retrieve 
  
        await response.json() // converting response to json format
          .then(response => setEvent(response)) //sending data to Events variable
          .catch(err => setErrors(err)) // to send errors if there are any
        
  
      }
      fetchData();
    }, [url]);
    return [Event, haserrors];
  } catch (err) {
    console.error(err);
    setErrors(err);
  }

}


export { useFetch };