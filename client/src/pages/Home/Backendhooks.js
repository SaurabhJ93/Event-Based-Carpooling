import { useState, useEffect } from "react";
import axios from 'axios';

function useFetch(url) {
  
  const [Events, setEvents] = useState([]);
  const [haserrors, setErrors] = useState(true);
  
  async function fetchData() {
    
    const response = await fetch(url);
    
    response
      .json()
      .then(response => setEvents(response["events"]))
      .catch(err => setErrors(err))
  
  }
  
  useEffect(() => {
    fetchData();
  });
  
  return [Events, haserrors];

}


export { useFetch };