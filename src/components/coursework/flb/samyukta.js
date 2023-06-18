import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './../../../styles/navbar.css'
import './../../../styles/component.css'
import allMessages from '../../../helpers/const/flb';
import Layout from './../../navbar/courseLayout';

import variables from '../../../helpers/const/vars';
import Navbar2 from '../../navbar/navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';
import Modal from './../../about/Contact'
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
    img: 'https://images.unsplash.com/photo-1635774855717-0aec182f92cc',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1513569536235-bf46baacc948',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1650897492393-6fc8363937df',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661515580420-a28e461fd8b0',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1573646609328-01f50a125c0c',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1609742046972-211e319fdb5b',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1581091007718-0c50d599bfd0',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31',
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
              {/* <li><Link reloadDocument to = "#age40">Age 40</Link></li> */}
              <p>Get unstuck</p>
                     
              <li>Join our discord</li>
              <Modal email="jhajhariaarnav@gmail.com"/>
{/*   
              <p>Liked this course? Maybe you'll like these</p>
             <li><Link reloadDocument to='/courses/mentica/schizophrenia'> Schizophrenia</Link></li>
              <li><Link reloadDocument to='/courses/mentica/cbt'>CBT</Link></li>
              <li><Link reloadDocument to='/courses/mentica/comparing'>Comparing yourself</Link></li>
              <Link><p>For further info on mental health, visit mentica.in</p></Link> */}
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
              {/* <li><Link reloadDocument to = "#age40">Age 40</Link></li> */}
              <p>Get unstuck</p>
                     
              <li>Join our discord</li>
              <Modal email="vaanigoenka445@gmail.com"/>
{/*   
              <p>Liked this course? Maybe you'll like these</p>
             <li><Link reloadDocument to='/courses/mentica/schizophrenia'> Schizophrenia</Link></li>
              <li><Link reloadDocument to='/courses/mentica/cbt'>CBT</Link></li>
              <li><Link reloadDocument to='/courses/mentica/comparing'>Comparing yourself</Link></li>
              <Link><p>For further info on mental health, visit mentica.in</p></Link> */}
              
           </div>
        </div>

        <div className='secondSection'>
          {
            allMessages[course].map(function (message) {
              if(!message.image)
              {
                
              
                

               return ( <div  onClick={() => {
                if(message.link) {
                    // navigate(0)
    window.location.replace(message.link);
                }}}style = {{alignItems:(message.speaker == 'Child')?'flex-end':(message.speaker=='Narrator')?'center':'flex-start', color:'blue'}}className={`conversation ${(img)?'margintop':(img=false)}`} id = {message.age?("age" +message.age):""}>
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
