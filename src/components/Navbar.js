import React from "react";

export default function Navbar() {

    const openMenu = (event) => {
        console.log("Opened!");
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.left = "0px";
    }

    const closeMenu = (event) => {
        console.log("Closed!");
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.left = "-100%";
    }

    return (
        <React.Fragment>
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
            <aside
                className="sidebar"
            >
                <div>
                    <img className="exit-btn" src="" alt="exit" onClick={closeMenu} />
                </div>
                <ul className="sidebar-options">
                    <li>about</li>
                    <li>shop</li>
                    <li>
                        <ul className="shop-options">
                            <li>print-on-demand</li>
                            <li>limited edition prints</li>
                            <li>original artwork</li>
                            <li>nfts, tattoos, graphics</li>
                            <li>other places to find my art</li>
                            <li>on sale now</li>
                        </ul>
                    </li>
                    <li>contact</li>
                    <li>giving back</li>
                    <li>account</li>
                    <li>
                        <img src="" alt="cart icon" />
                    </li>
                </ul>
                <br/>
                <h2>Start a custom project</h2>
                <footer>
                    <div className="nav-logo">
                        <h2>ARIEL JAY</h2>
                        <h2>NEWMAN</h2>
                    </div>
                </footer>
            </aside>
        </React.Fragment>
    )
}