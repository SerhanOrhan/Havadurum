import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Navbarmenu from "../Header/Navbarmenu"


function SearchForm(props) {

    const { setSearch } = props
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setSearch(data.name)

    return (
        <div>
            <Container >
                <Navbarmenu home="Anasayfa" search="Arama" contact="İletişim" />
         
                <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                    <input
                        className="search-space"
                        placeholder="Search"
                        text="text"
                        {...register("name")} />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </Container>
        </div>
    )
}

export default SearchForm;
