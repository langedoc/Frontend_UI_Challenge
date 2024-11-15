import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.scss';

export default function ItemList({movies}) {
    return (
        <div className="item-list">
            {!movies ? (
                <div className="loading">Loading...</div>
            ) : (
                movies.map((movie) => (
                    <ItemCard key={movie.id} movie={movie} />
                ))
            )}
        </div>
    );
};