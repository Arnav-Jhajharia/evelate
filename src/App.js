import React, { useEffect, useState } from 'react';
// import ScrollReveal from 'scrollreveal';
import { useParams } from 'react-router-dom';
import Layout from './components/navbar/courseLayout'
import { cmap } from './helpers/const/courseDetails'
// const messages = [
//   // Your messages array here
// ];

const App = () => {
const { type } = useParams(); 

    const path = cmap[type]
    let ComponentToRender = null;
try {
  if (path) {
    ComponentToRender = React.lazy(() => import(`./components/coursework/${path}`));
    console.log(ComponentToRender)
  }
}
catch {
    console.log('scem')
}

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {ComponentToRender &&<ComponentToRender />}
    </React.Suspense>
  );
};

export default App;
