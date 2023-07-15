import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import BannerImage from "../../assets/pizzaHome.jpg"

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Pizzeria</h1>
                <p>Pizza to FIT ANY TASTE</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home