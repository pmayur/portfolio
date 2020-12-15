import "./Me.css";

import htmlIcon from "./images/html5-2.svg";
import Icon from "./icon/Icon";

export default function Me() {
    return (
        <div id="me">
            <div id="heading">
                <h1 id="name">mayur patil</h1>
                <h2 id="desig">full stack engineer</h2>
            </div>
            <div id="skill">
                <h3>things i like working on</h3>
                <div id="icons">
                    <Icon image={htmlIcon} text={"HTML "} />
                </div>
            </div>
        </div>
    );
}
