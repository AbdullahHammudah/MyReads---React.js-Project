import React from "react";
import { Link } from "react-router-dom";

const GoToHome = (props) => {
    return (
        <Link to='/'>
            <div>
                <button className="close-search">Close</button>
            </div>
        </Link>
    );
}

export default GoToHome;