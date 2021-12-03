import React, { useState, useEffect } from 'react'
import axios from "axios"
import Navbarmenu from "../components/Header/Navbarmenu"
import { useParams } from 'react-router';
import DetailCards from '../components/Cards/DetailCards';
import { useSelector } from 'react-redux';
import Footer from '../components/stores/Footer';
import { Container } from 'react-bootstrap';

function Detail() {
    const { dark } = useSelector(state => state.store)
    const { name } = useParams();
    const [weathers, setWeathers] = useState([]);
    const getWeathersForDetail = () => {
        axios.get('https://community-open-weather-map.p.rapidapi.com/forecast', {
            method: 'GET',
            params: { q: name },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'f5718f6978mshd4ff103fa20a2ecp1e2346jsnbb90e077e705'
            }
        })

            .then(function (response) {
                setWeathers(response.data.list);
            });
    };
    useEffect(() => {
        getWeathersForDetail();


    }, []);
    console.log(weathers)
    return (
        <div className={dark ? ' dark' : 'light'}>
            <Container >
                <Navbarmenu home="Anasayfa" search="Arama" contact="İletişim" />
                <Footer />
                <h1> {name}</h1>
                {weathers?.map((item, index) => {
                    return <DetailCards key={index}
                        icon={item.weather[0].main}
                        isDetail
                        name={weathers.name}
                        date={item.dt_txt}
                        minTemprature={item.main?.temp_min.toFixed() - 273}
                        maxTemprature={item.main?.temp_max.toFixed() - 273} />
                })}
            </Container>
        </div>
    )
}
export default Detail;
