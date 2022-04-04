import React from "react";

export default function Navbar() {

    const openMenu = (event) => {
        console.log("Opened!")
    }

    return (
        <header className="navbar">
            <nav>
                <div className="nav-logo">
                    <h2>ARIEL JAY</h2>
                    <h2>NEWMAN</h2>
                </div>
                <div className="nav-menu">
                    <img src="../images/Bag.png" alt="cart icon" />
                    <img onClick={openMenu} src="../images/Menu Rounded.png" alt="menu icon" />
                </div>
            </nav>
        </header>
    )
}