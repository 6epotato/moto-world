import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {


    const [bikes, setbikes] = useState([])
    const [cart, setCart] = useState([])
    const [randomCart, setRandomCart] = useState([])

    //for celear all section
    const deleteCart = () => {
        setCart([]);
        setRandomCart([]);
    }

    // for random cart 
    const handleRandomCart = (cart) => {
        const randomCart = cart[Math.floor(Math.random() * cart.length)];
        const newRandomCart = [randomCart]
        setRandomCart(newRandomCart);


    }

    //for see the card items
    const handleAddToCart = (bike) => {
        const newCart = [...cart, bike]
        setCart(newCart);
    };
    // fetch data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setbikes(data))
    }, [])
    return (
        //bikes container
        <div className='bike-container'>
            <div className='bikes'>
                {
                    bikes.map(bike => <Bike key={bike.id} bike={bike} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <h3>Your Choosen Ride</h3>
                    <div>
                        {
                            //showing choosen items
                            cart.map((item) => (<h3 key={item.id}>{item.name}</h3>
                            ))
                        }
                    </div>
                    <div>
                        {/* button for random cart */}
                        <button onClick={() => handleRandomCart(cart)} className='btn-cart1'><p className='btn-text'>Best For You</p><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></button>
                    </div>
                    <div>
                        {
                            // clear all section 
                            randomCart.map((randomItem) => (<h3 key={randomItem.id}>{randomItem.name}</h3>))


                        }
                    </div>
                    <div>
                        {/* clear button  */}
                        <button onClick={() => deleteCart(cart)} className='btn-cart2'><p className='btn-text'>Choose Again</p><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikes;