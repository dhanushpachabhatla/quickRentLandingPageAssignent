"use client";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import SignIN from '@mui/icons-material/SensorOccupiedRounded';
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import "./styles.css";

const TemporaryDrawer = () => {
    const [isSigned, setIsSigned] = useState(true);
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className="link"  style={{color:"white"}}/>
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className="drawer-div">
                    <div className='icon-name'>
                    <HomeRoundedIcon className='icon-padding'/>
                    <a href="/home" aria-label="Home">
                        <span>Home</span>
                    </a>
                    </div>
                    
                    <div className='icon-name'>
                        <InfoRoundedIcon className='icon-padding'/>
                    <a href="/about" aria-label="About">
                        <span>About</span>
                    </a>
                    </div>
                    <div className='icon-name'>
                    <FeaturedPlayListRoundedIcon className='icon-padding'/>
                    <a href="/features" aria-label="Rentals">
                        <span>Rentals</span>
                    </a>
                    </div>
                    <div className='icon-name'>
                    <SignIN className='icon-padding'/>
                    {isSigned ? (
                        <a href="/signup" aria-label="Sign Up">
                            <span>Sign Up</span>
                        </a>
                    ) : (
                        <a href="/signup" aria-label="Log Out">
                            <span>Log Out</span>
                        </a>
                    )}
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default TemporaryDrawer;

