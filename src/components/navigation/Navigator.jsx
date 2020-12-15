import { Link } from "react-router-dom";

import "./Navigator.css";

export default function Navigator() {
    const TEXTDECOR = { textDecoration: 'none' };

    return (
        <div id="navigator">
            <div id="link-list">
                <Link to="/" style={TEXTDECOR}>
                    <div className="link">about</div>
                </Link>

                <Link to="/work" style={TEXTDECOR}>
                    <div className="link">work</div>
                </Link>

                <Link to="/education" style={TEXTDECOR}>
                    <div className="link">education</div>
                </Link>

                <Link to="/projects" style={TEXTDECOR}>
                    <div className="link">projects</div>
                </Link>
            </div>
        </div>
    );
}
