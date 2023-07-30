import React, { useEffect } from 'react';
import video from './video3.mp4'
import Navbar from './../../navbar/navbar'
import Footer from './../../navbar/Footer' 
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../helpers/const/vars';
import './../assets/css/home.css'

const VideoComponent = () => {
  const [state, setState] = React.useState({message: 'Take part in the live preview!', link: '/wordpower/quiz/a1'});
  const navigate = useNavigate()
  useEffect(() => {
    async function lol()
    {
      const response = await fetch(`${BASE_URL}/wordpower`, {method: 'GET', headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }})
      const text = await response.text()
      if(text == 'new')
      {
        console.log('baale baale')
        setState({message: 'Take part in the live preview', link: '/wordpower/quiz/a1'})
      }
      else if(text == 'old')
      {
        console.log('baale')
        setState({message: `Thanks for taking part, we'll be back soon!`, link: '/catalog'})
      }
      else if(text == 'moderate')
      {
        setState({message: `Continue!`, link: '/catalog'})
      }
    }
    lol();
  }, [])
  return (
    <>
    <Navbar type = "catalog" />
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover',   opacity: 1 }}
      />
      <div
       
        className='bruhski'
      >
        <h1 style={{ fontSize: '4rem' }}>Word Power</h1>
         <h1 style={{ fontSize: '1.5rem',color: '#949494', fontFamily: 'Verdana (sans-serif)' }}>Feel like you are losing your touch with words? <br /><p style={{ fontSize: '1.5rem'}}>Through our AI-powered adaptive interface, you can learn better!</p></h1>
        <button
          onClick={() => navigate(state.link)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: '#2d2d2d',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginTop: '2rem',
          }}
        >
          {state.message}
        </button>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default VideoComponent;
