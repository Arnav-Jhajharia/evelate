import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './../../../styles/navbar.css'
import './../../../styles/component.css'
import allMessages from '../../../helpers/const/currentaffairs';
import Layout from './../../navbar/courseLayout';

import variables from '../../../helpers/const/vars';
import Navbar2 from '../../navbar/navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';
import Modal from './../../about/Contact'
import ModalNews from './../../navbar/ModalNews'
import { Link } from 'react-router-dom';

const messages = [
  // Your messages array here
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function QuiltedImageList() {
  return (
    <ImageList
      sx={{ position: 'sticky', top: 0, height: '100vh' , opacity: 0.2}}
      variant="quilted"

      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1685879101305-6800d428fa30',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1587826154528-f1adec0a4653',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1516485392461-3961cc21f1e7',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1595367864489-d2a4e1663257',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1634984884181-f8a6b98decdd',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1686644472082-75dd48820a5d',
    title: 'Bike',
    cols: 2,
  },
];

const MerkleTreesConversation = () => {
  const { course } = useParams();
   console.log(course)
  // let [left, setLeft] = useState(true)
  // let [img, setImg] = useState(false)
  let [n, setN] = useState(1);
  const [data, setData] = useState([]);
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  let left = true, img = false;


  useEffect(() => {
    // ScrollReveal().reveal('.iframe-container')
    ScrollReveal().reveal('#heading')
    ScrollReveal().reveal('.conversation-containers')
    

    // Initialize ScrollReveal
    const messages1 = document.querySelectorAll('.sr');
    // messages1[0].style.fontSize = '4rem';
    const messagesArray = Array.prototype.slice.call(messages1).slice(1)
    console.log(messagesArray)
    // const sr = ScrollReveal();

    ScrollReveal().reveal(messagesArray, {
        delay: 200,
        distance: '50px',
        duration: 200,
        interval: 500

    });

// goToConversation(1);
  }, [])

  // useEffect(() => {
  //   setLeft(!left)
  // }, [left])

  // useEffect(() => {
  //   setImg(!img)
  // }, [img])

  const goToConversation = () => {
    const layer = document.getElementsByClassName('conversation')[n - 1];
    if (layer) {
      layer.scrollIntoView({ behavior: 'smooth' });
    }
    else
    {
      // console.log('hakunaa')
    }
  };

  // document.addEventListener('keydown', (event) => {
  //   const keyCode = event.key;
  //   console.log(n)
  //   console.log(keyCode)
  //   if (keyCode == "ArrowDown") {
  //     event.preventDefault();
  //     setN(n + 1)
  //     goToConversation(n + 1);
  //   } else if (keyCode == "ArrowUp") {
  //     event.preventDefault();
  //     setN(n - 1)
  //     goToConversation(n - 1);
  //   }
  // });



  return (
     <Layout navbar = {<> <div className='left-orient left-orient2' style={{ fontSize: '1rem', background: 'rgba(14, 16, 38, 0)', paddingRight: '4rem', maxWidth: '100vw'}}> 
              <p>Change difficulty</p>
              <li><Link reloadDocument to="#age10">Age 10</Link></li>
              <li><Link reloadDocument to = "#age18"> Age 18</Link></li>
              <li><Link reloadDocument to = "#age40">Age 40</Link></li>
              <p>Get unstuck</p>
                     
              <li><Link to = "https://discord.gg/gt9wtGhv">Join our discord</Link></li>
              <Modal email="jhajhariaarnav@gmail.com"/>
  
              <p>Liked this course? Maybe you'll like these</p>
             {/* <li><Link reloadDocument to='/courses/mentica/schizophrenia'> Schizophrenia</Link></li>
              <li><Link reloadDocument to='/courses/mentica/cbt'>CBT</Link></li>
              <li><Link reloadDocument to='/courses/mentica/comparing'>Comparing yourself</Link></li> */}
              {/* <Link><p>For further info on mental health, visit mentica.in</p></Link> */}
           </div></>}>
    <React.Fragment>
      {/* <Navbar2 name = "Merkle Trees"/> */}

      <br /><br />

      

      <div className="conversation-containers">
        <div className='firstSection'>
           <div className='left-orient left-orient1' style={{paddingLeft: '2rem', fontSize: '1.2rem', height: '100vh', background: 'rgba(14, 16, 38, 0)', paddingRight: '4rem', maxWidth: '20vw'}}> 
              
              
              <p>Change difficulty</p>
              <li><Link reloadDocument to="#age10">Age 10</Link></li>
              <li><Link reloadDocument to = "#age18"> Age 18</Link></li>
              <li><Link reloadDocument to = "#age40">Age 40</Link></li>
              <p>Get unstuck</p>
                     
              <li><Link to = "https://discord.gg/gt9wtGhv">Join our discord</Link></li>
              <Modal email="jhajhariaarnav@gmail.com"/>
  
             
              {/* <Link><p>For further info on mental health, visit mentica.in</p></Link> */}
           </div>
        </div>

        <div className='secondSection'>
          {
            allMessages[course].map(function (message) {
              if(!message.image)
              {
                
              
                

               return ( <div style = {{alignItems:(message.speaker == 'Child')?'flex-end':(message.speaker=='Narrator')?'center':'flex-start', color:'blue'}}className={`conversation ${(img)?'margintop':(img=false)}`} id = {message.age?("age" +message.age):""}>
                  <div style={{}}>
                    
                    <div className='message-body sr'>
                    
                        <p style = {
                          { textAlign:
                          (message.speaker == 'Narrator')?'center':(message.speaker == "Child")?'right':'left'
                        ,
                        color: (message.speaker == 'Child')?variables.colorA:(message.speaker == 'Narrator')?'white':variables.colorB
                        ,
                            
                        }
                          
                          }
                          
                          className={(message.heading)?message.heading:""}
                                dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br>') }}

                          />
                     
                    
                    </div>
                  </div>
              </div>
             )
          }
             else {
                            
              // handleImage()
              img = true;
              left = !left;

              // setImg(true);
              // setLeft(!left);
              return  <img className = {`img-layout-styling ${(left)?'left':'right'}`}src = {message.src}></img>
             }
            })
          }
          </div>
          <div className='thirdSection'>
                      <QuiltedImageList />

          </div>
      </div>


      <div id="noclue" style={{ backgroundColor: 'aliceblue' }}></div>



      <script src="assets/js/main.js"></script>
    </React.Fragment>
    </Layout>
  );
};
// const merkletrees = () => { return 'hi!'}
export default MerkleTreesConversation;
