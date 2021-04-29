import React, { createContext, useState } from 'react';

//MovieContext will be used when we need data and this will generate context for that data
export const MovieContext = createContext();

//MovieProvider will only provide the data in that context
export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price: '10',
            id: 100,
        },
        {
            name: 'Game of Thrones',
            price: '10',
            id: 120,
        },
        {
            name: 'Emily Rose',
            price: '10',
            id: 130,
        },
        {
            name: 'DDLJ',
            price: '25',
            id: 140,
        },

    ])
    //props.children is the child elements to which this provider will wrap around and give access to movies data
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};