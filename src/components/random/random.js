import React, { useEffect, useState } from 'react';
import './random.css'; // Assuming you have a CSS file for styling
import { redirect } from "react-router-dom";
import Register from './register'
const GlassBox = () => {
    const [isRegis, setIsRegis] = useState(false);
    useEffect(() => {

        const prev = localStorage.getItem('prev')

        setIsRegis(!!prev);
        console.log(!!prev)

    }, [])
    console.log(isRegis)
    
    
    return (<Register />)

};

export default GlassBox;
