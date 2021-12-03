import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import DetailCards from './DetailCards';




function HomeCards(props) {
  const { location } = props
  const [weathers, setWeathers] = useState([]);


  useEffect(() => {
    axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      method: 'GET',
      params: {
        q: location,
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'f5718f6978mshd4ff103fa20a2ecp1e2346jsnbb90e077e705'
      }
    })
      .then(function (response) {
        setWeathers(response.data);
      });
  }, [location]);

  return (
    <div>
      <Container>


      {weathers &&    <DetailCards 
         icon={weathers?.weather?.length >0 && weathers.weather[0].main}
          withLink
          name={weathers?.name}
          location={weathers?.name}
          minTemprature={weathers?.main?.temp_min.toFixed() - 273}
          maxTemprature={weathers?.main?.temp_max.toFixed() - 273}
        />}


      </Container>
    </div>

  )
}

export default HomeCards
