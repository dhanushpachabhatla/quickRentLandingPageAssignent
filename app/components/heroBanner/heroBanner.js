import "./styles.css"
import '@fontsource/roboto/300.css';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Navbar from "../common/navbar";
import Button from "../common/Button";
const herobanner = () => {
    return (
        <div className="herobanner-container"  style={{
            backgroundImage: 'url("/back-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            color: "#fff",
            }} >
            
            {/* description */}
            <div className="desc">
                <div className="first-desc">
                    
                <h4 className="heading1"> Rent Gadgets Effortlessly </h4>
                <h1 className="heading2">Wide variety of laptops, cameras, and gaming consoles at affordable prices.</h1>
                
                <Button text='Explore Rentals'/>
                </div>
            </div>
        </div>
    )
}

export default herobanner
