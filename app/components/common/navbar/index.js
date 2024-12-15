"use client";
import React, { useState } from "react";
import Image from "next/image";
import TemporaryDrawer from "./drawer";
import "./styles.css";

const Navbar = () => {
  const [isSigned, setIsSigned] = useState(true);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Image src="/logo.jpg" alt="QuickRent Logo" width={50} height={50} />

      {/* Heading */}
      <div className="logo-heading">
        <h1>QuickRent</h1>
      </div>

      {/* Navigation Links */}
      <div className="other-nav">
        <a href="/home" aria-label="Home" data-replace="Home">
          <span>Home</span>
        </a>
        <a href="/about" aria-label="About" data-replace="About">
          <span>About</span>
        </a>
        <a href="/features" aria-label="Rentals" data-replace="Rentals">
          <span>Rentals</span>
        </a>
        {isSigned ? (
          <a href="/signup" aria-label="Sign Up" data-replace="Sign Up">
            <span>Sign Up</span>
          </a>
        ) : (
          <a href="/signup" aria-label="Log Out" data-replace="Log Out">
            <span>Log Out</span>
          </a>
        )}
      </div>

      {/* Drawer Menu */}
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
