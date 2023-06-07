import React, { useEffect, useState } from 'react';
// import ScrollReveal from 'scrollreveal';
import { useParams } from 'react-router-dom';
// const messages = [
//   // Your messages array here
// ];

const App = () => {
const { course } = useParams(); 
    let ComponentToRender = null;
try {
  if (course) {
    ComponentToRender = React.lazy(() => import(`./components/programming/${course}`));
  }
}
catch {
    console.log('scem')
}

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {ComponentToRender && <ComponentToRender />}
    </React.Suspense>
  );
};

export default App;
