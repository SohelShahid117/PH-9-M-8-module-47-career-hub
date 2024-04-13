import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Opss!!!</h2>
            <Link to='/'>
                <button>Go Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;