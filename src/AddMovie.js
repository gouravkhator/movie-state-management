import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import './App.css';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [movies, setMovies] = useContext(MovieContext);
    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };
    const addMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, { name: name, price: price, id: Math.random() * 100 }])
    };
    return (
        <form class="addForm" onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} placeholder="Enter movie name" />
            <input type="text" name="price" value={price} onChange={updatePrice} placeholder="Enter price" />
            <button>Submit</button>
        </form>
    );
};
export default AddMovie;