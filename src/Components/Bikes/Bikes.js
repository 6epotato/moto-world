import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setbikes] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setbikes(data))
    }, [])
    return (
        <div className='bike-container'>
            <div className='bikes'>
                {
                    bikes.map(bike => <Bike key={bike.id} bike={bike} />)
                }
            </div>
            <h1>this is side button</h1>
        </div>
    );
};

export default Bikes;