import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "../../assets/pizza.jpg"
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false)

    function toggleNavbar() {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <div className="logo">
                    <img src={Logo} alt="" className="logoImg" />
                </div>
                <div className="hiddenLinks">
                    <Link className="navLink" to="/">Home</Link>
                    <Link className="navLink" to="/menu">Menu</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                    <Link className="navLink" to="/about">About Us</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/menu">Menu</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <Link className="navLink" to="/about">About Us</Link>
                <button>
                    <ReorderIcon onClick={() => toggleNavbar()} />
                </button>
            </div>
        </div>
    )
}

export default Navbar