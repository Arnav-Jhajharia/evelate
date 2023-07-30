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

        <h1 style={{fontSize:'5rem'}}><span translate='no'>Evelate</span></h1>
        <h1 className='okidk'>Learn. Experience. Elevate.</h1>            
           {/* <h2 className='okirdk'>Explore a wide range of genres, including awareness and current affairs, with our company. We present information in a conversational and intuitive manner, offering rising levels of difficulty and free online resources to help you elevate your knowledge.</h2>          */}
    </div>

    <section className='preferences' >
        <img src={process.env.PUBLIC_URL+'/Media/Group5.png'}></img>
        <h1 style={{marginLeft:'1rem', marginRight: '1rem'}}>{(name)?`Hi, let's take you to today's course!`:`Let's set up`}  </h1>
            <button onClick={() => {
                navigate((name)?'/random':'/setup')
            }
            } className='button-6'>
                Take me
            </button>
{(!name)?<>
            <h1 style={{marginLeft:'1rem', marginRight: '1rem'}}>Already have an account? Sign in!</h1>
            <button onClick={() => {
                navigate((name)?'/random':'/login')
            }
            } className='button-6'>
                Let's go
            </button></>:""}
    </section>

     <div>
        <Better />
    </div>

        <Footer />
    </div>
  );
};

export default Register;
