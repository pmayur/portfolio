import Company from "./company/Company";
import "./Work.css";
import { MONKEYCHAI, ECW, HASURA } from "./../../util/text";

export default function Work() {
    return (
        <div id="work-container">
            <div id="container">
                <Company company={MONKEYCHAI} />

                <br />
                <Company company={ECW} />

                <br />
                <Company company={HASURA} />
            </div>
        </div>
    );
}
