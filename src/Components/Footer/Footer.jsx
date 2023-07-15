import React from 'react'
import "./Footer.css"
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <Instagram />
                <Twitter />
                <Facebook />
                <LinkedIn />
            </div>
            <a href="">&copy; 2023 techpizza.com</a>
        </div>
    )
}

export default Footer