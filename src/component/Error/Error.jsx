// import React from 'react';

import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/goodbye');


    return (
        <div>
            <h2>This is error page</h2>
             <Link onClick={handleClick}>Go back</Link>
        </div>
    );
};

export default Error;