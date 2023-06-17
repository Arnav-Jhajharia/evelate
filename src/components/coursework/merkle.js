import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './../../styles/navbar.css'
import './../../styles/component.css'
import allMessages from './../../helpers/const/merkle';

import variables from './../../helpers/const/vars';
import Navbar2 from './../navbar/navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from './../about/Contact'
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
    img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1605792657660-596af9009e82',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1644343262170-e40d72e19a84',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

const MerkleTreesConversation = () => {
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
    ScrollReveal().reveal('.iframe-container')
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
    <React.Fragment>
      {/* <Navbar2 name = "Merkle Trees"/> */}

      <br /><br />

      

      <div className="conversation-containers">
        <div className='firstSection'>
           <div className='left-orient' style={{paddingLeft: '2rem', fontSize: '1.2rem', height: '100vh', background: 'rgba(14, 16, 38, 0)', paddingRight: '4rem', maxWidth: '20vw'}}> 
              <p>Change difficulty</p>
              <li>Age 5</li>
              <li>Age 10</li>
              <li>Age 17</li>
              <p>Get unstuck</p>
                     
              <li>Join our discord</li>
              <Modal />
  
             
              
           </div>
        </div>

        <div className='secondSection'>
          {
            allMessages[0].map(function (message) {
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
                          >{message.content}</p>
                     
                    
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


      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V6gLY-1G4Mc?start=55"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>


      <div onClick={() => {window.location.assign('https://main--taupe-heliotrope-dbb3b1.netlify.app?value=Merkle', {target:'_blank'});}} className="conversation-containers">
      {
            allMessages[1].map(message => {
               return ( <div style = {{alignItems:(message.speaker == 'Child')?'flex-end':(message.speaker=='Narrator')?'center':'flex-start', color:'blue'}}className='conversation' id = {message.age?message.age:""}>
                  <div style={{}}>
                    <div className='message-body sr'>
                    
                        <p style = {
                          { textAlign:
                          (message.speaker == 'Narrator')?'center':(message.speaker == "Child")?'right':'left'
                        ,
                        color: (message.speaker == 'Child')?variables.colorA:(message.speaker == 'Narrator')?variables.colorB:'#87CEEB'
                        , 
                       
                        }
                          
                          }>{message.content}</p>
                     
                    
                    </div>
                  </div>
              </div>
             )
            })
          }
      </div>

      <script src="assets/js/main.js"></script>
    </React.Fragment>
  );
};

export default MerkleTreesConversation;
