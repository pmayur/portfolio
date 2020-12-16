import "./Company.css";

export default function Company(props) {
    const TITLE = props.company.TITLE;
    const COMPANY = props.company.COMPANY;
    const SITE = props.company.SITE;
    const DESC = props.company.DESC;
    const DATE = props.company.DATE;

    const LIST = props.company.LIST.map( (element, index) => {
        return (<li key={index}>{element}</li>)
    })

    return (
        <div id="section">
            <h2 id="work-title">
                {TITLE +" @ "}
                <a href={SITE} target="_blank" rel="noopener noreferrer">
                    <span className="company-name">{COMPANY}</span>
                </a>
            </h2>
            <h3 id="desc">
                {DESC}
            </h3>
            <span id="date">{DATE}</span>
            <ul>
               {LIST}
            </ul>
        </div>
    );
}
