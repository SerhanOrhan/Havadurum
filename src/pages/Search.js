import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Container } from 'react-bootstrap';
import DetailCards from '../components/Cards/DetailCards';
import SearchForm from '../components/Search/SearchForm';
import { useSelector } from 'react-redux';
import Footer from '../components/stores/Footer';

function Search() {
    const { dark } = useSelector(state => state.store)

    console.log();
    const [search, setSearch] = useState(null);
    const [weathers, setWeathers] = useState([]);
    const getWeathersForSearch = () => {
        axios.get('https://community-open-weather-map.p.rapidapi.com/forecast', {
            method: 'GET',
            params: { q: search },
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
        search && getWeathersForSearch();

    }, [search]);
    console.log(weathers)

    return (
        <div>
            <Container className={dark ? ' dark' : 'light'}>

                <SearchForm setSearch={setSearch} />
                <br/>
                <Footer />
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

export default Search

