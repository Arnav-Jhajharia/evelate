import React from 'react';
import './register.css'
import Better from './BetterSection'
// Initialization for ES Users
import Navbar from './../navbar/navbar'
import Footer from './../navbar/App'  
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar type = "catalog" />
    <div className='full-screen'>

        <h1 style={{fontSize:'5rem'}}>Evelate</h1>
        <h1 className='okidk'>Learn. Experience. Understand.</h1>            
   
    </div>

    <section className='preferences' >
        <img src={process.env.PUBLIC_URL+'/Media/Group5.png'}></img>
        <h1>Let's set up your daily feed </h1>
            <button onClick={() => {
                navigate('/setup')
            }
            } className='button-6'>
                Take me
            </button>
    </section>

     <div>
        <Better />
    </div>

        <Footer />
    </div>
  );
};

export default Register;
