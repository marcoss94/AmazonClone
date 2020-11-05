import React from 'react'
import './Home.css'
import Product from './Product'
import { Pulse } from "react-awesome-reveal";


function Home() {

    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' alt='' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                <h1>Hola Marcos, que quieres de cumpleaños! 🎁</h1>

                <div className='home__row'>
                    <Product
                        id='234234'
                        title='HORI Compact Playstand for Nintendo Switch Officially Licensed by Nintendo'
                        price={12.19}
                        image='https://images-na.ssl-images-amazon.com/images/I/41JLIs0cChL.jpg'
                        rating={5}
                    />


                    <Product
                        id='234234s'
                        title='Auriculares VR para Nintendo Switch, OIVO 3D VR (realidad virtua para Nintendo Switch'
                        price={19.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61SSZLacZxL._AC_SL1050_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='234234a'
                        title='Auriculares para juegos para Xbox One, PS4, Nintendo Switch, Bass Surround y able ajustable, auriculare, Azul'
                        price={24.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg'
                        rating={5}
                    />
                    <Product
                        id='2324234'
                        title='PS4 Controller Charger, Y Team Playstation 4 / PS4 / PS4 Pro / PS4 '
                        price={22.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61eEbDA%2BVHL._AC_SL1000_.jpg'
                        rating={5}
                    />
                    <Product
                        id='2343234'
                        title='RegeMoudal 360 - Mando cocontrolador ergonómico de juego con cable (negro 1)'
                        price={16.19}
                        image='https://images-na.ssl-images-amazon.com/images/I/61axiFzoV6L._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='234as234'
                        title='Mayflash GameCube - Adaptador controlador para Wii U y PC USB (4 puertos)'
                        price={54.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg'
                        rating={5}
                    />

                </div>


            </div>
        </div>
    );
}

export default Home;