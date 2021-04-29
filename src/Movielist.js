import React, { useContext } from 'react';
import Movie from './Movie';
import './App.css';
import { MovieContext } from './MovieContext';  //for using value passed in movie provider

const Movielist = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <table className="movieTable">
                <tr className="movieItem">
                    <th><h1>Title</h1></th>
                    <th><h1>Price</h1></th>
                </tr>
                {movies.map(({ name, price, id }) => (
                    <Movie name={name} price={price} key={id} />
                ))}
            </table>
        </div>

    );
};

export default Movielist;