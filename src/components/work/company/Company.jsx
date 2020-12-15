import "./Company.css";

export default function Company(props) {
    const TITLE = props.company.TITLE;
    const COMPANY = props.company.COMPANY;
    const DESC = props.company.DESC;
    const DATE = props.company.DATE;

    const LIST = props.company.LIST.map( (element, index) => {
        return (<li key={index}>{element}</li>)
    })

    return (
        <div id="section">
            <h2 id="work-title">
                {TITLE +" @ " + COMPANY}
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
