
import { useNavigate } from "react-router-dom";
import "./fonts/better.css";
import { Link } from 'react-router-dom'
import ModalNews from './../navbar/ModalNews'

const App = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    if(localStorage.getItem('name'))
    {
      navigate('/random')
    }
    else {
      navigate('/setup')
    }
  }
  return (
    <div className="lol">
      {/* <div className="header">
      The way you want. Not banks.
      </div> */}
      <br />
      {/* <div className="topText">
      Xade is a hybrid solution between DeFi and traditional banks powered by in-house DeFi protocols that provide all banking services in the most transparent and efficient way
      </div> */}
      <br></br>
      <div className="boxgfather">
      <div className="boxfather">
      <div onClick = {handleClick}className="betterbox betterbox1">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b1.png'} alt="Image" />

        </div>
        <div className="headerText">Discover a new world of knowledge every day</div>
        <hr className="line1" />
        <div className="circle"></div>
        <div className="mainText">Evelate provides bite-sized information and insights through engaging short forms, keeping you informed and elevated.</div>
      </div>

      <Link to = '/wordpower'className="betterbox betterbox2">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b2.png'} alt="Image" />
        </div>
        <div className="headerText">Elevate your Word Power!</div>
        <hr className="line1" />        <div className="spheres"></div>
        <div className="mainText">We offer interactive activities and games that enhance your word skills, making learning fun and engaging*</div>
      </Link>
      </div>
      <div className="boxfather">
      <Link to = '/roadmap' className = "betterbox betterbox3">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b3.png'} alt="Image" />
        </div>
        <div className="headerText">Don't know where to start? Worry not!</div>
        <hr className="line1" />        <div className="shield"></div>
        <div className="mainText">Discover your potential with our personalized guide. Follow clear steps, access resources, and unlock success with our guided approach and community support.</div>
      </Link>
  
      <Link to = '/catalog'className="betterbox betterbox4">
        <div className="ellipse2">
        <img src={process.env.PUBLIC_URL + '/Media/b4.png'} alt="Image" />
        </div>
        <div className="headerText">Explore a library of topics</div>
        <hr className="line1" />        <div className="thumb"></div>
        <div className="mainText">Choose from our diverse catalog of courses, covering a wide range of subjects. Expand your horizons and learn at your own pace with LearnTech's comprehensive learning resources.</div>
      
      </Link>
      </div>
    </div>
    </div>
  );
};

export default App;