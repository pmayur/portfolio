import "./Links.css";
import githubIcon from "../../assets/github.png";
import freecodecampIcon from "../../assets/freecodecamp.png";
import hackerrankIcon from "../../assets/hackerrank.png";
import leetcodeIcon from "../../assets/leetcode.png";
import codepenIcon from "../../assets/codepen.png";
import emailIcon from "../../assets/email.png";

const LINKS = [
    {
        NAME: 'Email',
        HREF: 'mailto:pmayurg01@gmail.com',
        ICON: emailIcon
    },
    {
        NAME: 'Github',
        HREF: 'https://github.com/pmayur',
        ICON: githubIcon
    },
    {
        NAME: 'FreeCodeCamp',
        HREF: 'https://www.freecodecamp.org/pmay',
        ICON: freecodecampIcon
    },
    {
        NAME: 'Hackerrank',
        HREF: 'https://www.hackerrank.com/maypl',
        ICON: hackerrankIcon
    },
    {
        NAME: 'LeetCode',
        HREF: 'https://leetcode.com/maypl',
        ICON: leetcodeIcon
    },
    {
        NAME: 'Codepen',
        HREF: 'https://codepen.io/pmayur',
        ICON: codepenIcon
    },
]

export default function Links() {

    let linksList = LINKS.map((link, index) => {
        return (
            <div className="link-element" key={index}>
                <a href={link.HREF} target="blank">
                    <img src={link.ICON} alt={link.NAME} className="links-icon" />
                </a>
            </div>
        );
    })

    return (
        <div id="links-container">
            {linksList}
        </div>
    );
}
