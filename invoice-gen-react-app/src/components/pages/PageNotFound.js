import React from "react";
import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="alert text-center">
            <br/>
            <br/>
            <br/>
            <br/>
            <h5>Status Code: 404</h5>

            <h1 >PAGE NOT FOUND :(</h1>

            <p>
                We couldn't reach to the destination you are looking for.
            </p>

            <Link to="/" className="btn btn-dark">
                Go to Home
            </Link>

        </div>
    );
}

export default PageNotFound;