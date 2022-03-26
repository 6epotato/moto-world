import React from 'react';
import './Bike.css'

const Bike = (props) => {
    const { name, img, price } = props.bike;
    return (
        <div className='bike'>

            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>price: {price}<h6>BDT</h6></p>
            <button className='want-btn'>Want To Ride</button>
        </div>
    );
};

export default Bike;