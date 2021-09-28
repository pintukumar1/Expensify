import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1 style={{textAlign: "center", color: "red"}}>404 error!😟 Page not found!</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFoundPage