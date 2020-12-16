import React, { useState } from 'react'
import "./HamburgerMenu.css"
import hamburgerIcon from "../../assets/hamburger.png"

import Navigator from "../navigation/Navigator"

export default function HamburgerMenu() {

    const [menuVisibility, setmenuVisibility] = useState(false);

    const showMenu = () => {
        setmenuVisibility(true);
    }

    const hideMenu = () => {
        setmenuVisibility(false);
    }

    return (
        <div id="hamburger-menu-container">
            <div id="hamburger-icon-wrapper" onClick={ menuVisibility ? hideMenu : showMenu }>
                <img src={hamburgerIcon} alt="" id="hamburger-icon"/>
            </div>
            <div id="navig-menu-wrapper">
                {
                    menuVisibility ? <Navigator /> : null
                }
            </div>
        </div>
    )
}