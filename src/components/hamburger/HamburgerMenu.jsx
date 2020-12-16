import "./HamburgerMenu.css"
import hamburgerIcon from "../../assets/hamburger.png"

import Navigator from "../navigation/Navigator"

export default function HamburgerMenu() {
    return (
        <div id="hamburger-menu-container">
            <div id="hamburger-icon-wrapper">
                <img src={hamburgerIcon} alt="" id="hamburger-icon"/>
            </div>
            <div id="navig-menu-wrapper">
                <Navigator />
            </div>
        </div>
    )
}