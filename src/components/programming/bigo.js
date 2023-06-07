import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './../../styles/navbar.css'
import './../../styles/component.css'
import allMessages from './../../helpers/const/merkle';
import Navbar from './../navbar/navbar'
const messages = [
  // Your messages array here
];

const MerkleTreesConversation = () => {
  let [n, setN] = useState(1);
  const [data, setData] = useState([]);
  


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
        interval: 200

    });

// goToConversation(1);
  }, [])

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
      <Navbar />

      <br /><br />

      <div className="conversation" style={{ alignItems: 'center', color: 'white' }}>
        <div className="message-body sr">
          <p style={{ textAlign: 'center' }} id="heading">Merkle Trees</p>
        </div>
      </div>

      <div className="conversation-containers">
          {
            allMessages[0].map(message => {
               return ( <div style = {{alignItems:(message.speaker == 'Child')?'flex-end':(message.speaker=='Narrator')?'center':'flex-start', color:'blue'}}className='conversation' id = {message.age?("age" +message.age):""}>
                  <div style={{}}>
                    <div className='message-body sr'>
                    
                        <p style = {
                          { textAlign:
                          (message.speaker == 'Narrator')?'center':(message.speaker == "Child")?'right':'left'
                        ,
                        color: (message.speaker == 'Child')?'#8A9A5B':(message.speaker == 'Narrator')?'white':'#007bff'
                        }
                          
                          }>{message.content}</p>
                     
                    
                    </div>
                  </div>
              </div>
             )
            })
          }
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
                        color: (message.speaker == 'Child')?'#8A9A5B':(message.speaker == 'Narrator')?'white':'#007bff'
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
