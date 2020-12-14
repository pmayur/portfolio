import { Link } from "react-router-dom";

import "./Navigator.css";

export default function Navigator() {
    return (
        <div id="navigator">
            <div id="list">
                <Link to="/">
                    <div>i am</div>
                </Link>

                <Link to="/work">
                    <div>work</div>
                </Link>

                <Link to="/education">
                    <div>education</div>
                </Link>

                <Link to="/projects">
                    <div>projects</div>
                </Link>

                <Link to="/aboutme">
                    <div>about me</div>
                </Link>
            </div>
        </div>
    );
}
