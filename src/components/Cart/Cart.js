import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveButton}) => {
    return (
        <div className={`cart ${cart.length === 1 ?`yellow` : cart.length > 1 ?`green` : ``}`}>
            <h2>order summary</h2>
            <h3>secleed items : {cart.length}</h3>
            {
                cart.map(tshart => <p key={tshart._id}>
                    {tshart.name}
                    {<button onClick={()=> handleRemoveButton(tshart)}>X</button>}
                    </p>)
            }
        </div>
    );
};

export default Cart;