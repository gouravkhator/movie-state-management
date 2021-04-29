import React from 'react';
import './App.css';

const Movie = ({ name, price }) => {
    return (
        <tr className="movieItem">
            <td className="movieName">
                <h3>{name}</h3>
            </td>
            <td className="moviePrice">
                <h3>Rs. {price}</h3>
            </td>
        </tr>
    )
};

export default Movie;