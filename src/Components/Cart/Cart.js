import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Your Choosen Ride</h3>
            <div>
                <button>Best For You</button>
            </div>
            <div>
                <button>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;