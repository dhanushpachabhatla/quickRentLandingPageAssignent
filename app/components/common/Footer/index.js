"use client"
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./styles.css"
const Footer = () => {
return (
    <div className='footer-container'>
        <div className='footer-text'>
            © 2024 QuickRent, Inc. All rights reserved
        </div>
        <div className='footer-icons'>
            <a href="https://www.instagram.com/kaleidokaii/?hl=en" ><InstagramIcon/></a>
            <a href="https://x.com/kylobun"><XIcon/></a>
            <a href=""> <FacebookIcon/> </a>
            <a href="https://www.linkedin.com/in/dhanush-pachabhatla-349232332/?trk=opento_sprofile_details"><LinkedInIcon/> </a>
        </div>
    </div>
)
}

export default Footer
