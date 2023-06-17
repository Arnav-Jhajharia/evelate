import React, { useEffect, useState } from 'react';
import './random.css'; // Assuming you have a CSS file for styling
import { redirect, useLoaderData } from "react-router-dom";
import Register from './register'
import ScrollReveal from 'scrollreveal';
        ScrollReveal({ reset: true });

const GlassBox = () => {
  const name = useLoaderData();
    console.log(name)
    
    
    return (<Register name={name}/>)

};

export default GlassBox;
