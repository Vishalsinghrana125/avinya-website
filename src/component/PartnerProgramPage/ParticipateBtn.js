import "./partcipatebtn.css"
import { Link } from "react-router-dom";


export default function ParticipateBtn() {
    return (
        <div className="part-btn-section">
<Link className="nav-link-title" to={"/partner-program/registration"}>
            <button className="part-btn">Avinya Partner Program Registration</button>
            </Link>
        </div>
    )
    
};
