import "./Icon.css"
export default function Icon(props) {
    return (
        <div id="icon">
            <img src={props.image} alt="" className="icons" />
            <h2 id="icon-text">{props.text}</h2>
        </div>
    );
}
