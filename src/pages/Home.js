import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbarmenu from '../components/Header/Navbarmenu';
import { listdata } from '../dummydata/Listdata';
import HomeCards from '../components/Cards/HomeCards';
import Footer from '../components/stores/Footer';

function Home() {
  const { dark } = useSelector(state => state.store)
  return (
    <Container className={dark ? ' dark' : 'light'}>

      <Navbarmenu home="Anasayfa" search="Arama" contact="İletişim" />
      <Footer />
      {listdata?.map((item, index) => {
        return <HomeCards location={item.location} key={index} />
      })}

    </Container>
  )
}
export default Home;
