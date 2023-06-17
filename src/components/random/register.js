import React from 'react';
import './register.css'
import Better from './BetterSection'
// Initialization for ES Users
import Navbar from './../navbar/navbar'
import Footer from './../navbar/Footer'  
import { useNavigate } from "react-router-dom";

const Register = ({name}) => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar type = "catalog" />
    <div className='full-screen'>

        <h1 style={{fontSize:'5rem'}}>Evelate</h1>
        <h1 className='okidk'>Learn. Experience. Elevate.</h1>            
   
    </div>

    <section className='preferences' >
        <img src={process.env.PUBLIC_URL+'/Media/Group5.png'}></img>
        <h1>{(name)?`Hi ${name}, let's take you to today's course!`:`Let's setup your daily feed`}  </h1>
            <button onClick={() => {
                navigate((name)?'/random':'/setup')
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
