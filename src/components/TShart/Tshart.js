import React from 'react';
import './TShart.css'

const Tshart = ({tShart,handleAddtoCart}) => {
    const {name, picture, price} = tShart
    return (
        <div className='t-shart'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price : ${price}</p>
            <button onClick={() => handleAddtoCart(tShart)}>Buy now</button>
        </div>
    );
};

export default Tshart;