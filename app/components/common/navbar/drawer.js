"use client";
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
                    <a href="/home" aria-label="Home">
                        <span>Home</span>
                    </a>
                    <a href="/about" aria-label="About">
                        <span>About</span>
                    </a>
                    <a href="/features" aria-label="Rentals">
                        <span>Rentals</span>
                    </a>
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
            </Drawer>
        </div>
    );
};

export default TemporaryDrawer;

