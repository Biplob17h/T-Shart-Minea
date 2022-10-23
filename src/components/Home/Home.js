import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshart from '../TShart/Tshart';
import './Home.css'

const Home = () => {
    const tSharts = useLoaderData()

    const [cart, setCart] = useState([])
    const handleAddtoCart = tShart =>{
        const exest = cart.find(ts => ts._id === tShart._id)
        if(exest){
            alert ('Item alrady added')
        }
        else{
            const newCart = [...cart, tShart]
            setCart(newCart)
        }
    }

    const handleRemoveButton = tShart =>{
        const remaining = cart.filter(ts => ts._id !== tShart._id)
        setCart(remaining)
    }
    return (
        <div className='container'>
            <div className='t-shart-container'>
                {
                    tSharts.map(tShart => <Tshart
                    key={tShart._id}
                    tShart = {tShart}
                    handleAddtoCart = {handleAddtoCart}
                    ></Tshart>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                cart = {cart}
                handleRemoveButton = {handleRemoveButton}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;