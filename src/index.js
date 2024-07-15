import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Setup from './components/setup/Checkout'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Catalog from './components/catalog/courses'
import Random from './components/random/home'
import WordPower from './components/wordpower/wordpower'
import Contact from './components/about/Contact'
import Rando from './components/random/Random'
import Roadmap from './components/Roadmap'
import {other} from './helpers/const/courseDetails'
import { BASE_URL } from './helpers/const/vars';
import Login from './components/setup/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useRouteError,
  Link,
  redirect,
} from "react-router-dom";

import Home from "./components/wordpower/components/Home"
import Quiz from "./components/wordpower/components/Quiz"
import Result from "./components/wordpower/components/Result"
import Guides from './components/guides/'
import Error from "./components/wordpower/components/Error"
import { Provider } from './components/wordpower/context/QuizContext'
import RoadmapVE from "./components/Roadmap/courseDetails"

const router = createBrowserRouter([
  {
    path: "/wordpower",
    element: <Home />,
  },
  {
    path: "/guides",
    element: <Guides />,
  },
  {
    path: "/wordpower/quiz/:level",
    element: <Provider><Quiz /></Provider>,
  },
  {
    path: "/wordpower/result",
    element: <Provider><Result /></Provider>,
  },
  {
    path: "/wordpower/*",
    element: <Provider><Error /></Provider>,
  },

  {
    path: "/courses/:type/:course/:inner?",
    element: (
      <App />
    ),
    errorElement:<ErrorBoundary />

  },
   {
    path: "/roadmap",
    loader: async () => {
      return redirect('/roadmap/webdev')
    },
    element: (
      <RoadmapVE />
    ),

    errorElement:<ErrorBoundary />

  },
  {
    path: "/roadmap/:topic",
    element: (
      <Roadmap />
    ),

    errorElement:<ErrorBoundary />

  },
  {
    path: "/courses/:type",
    element: (
      <App />
    ),
    errorElement:<ErrorBoundary />

  },
  {
    path: "/catalog",
    element: (<Catalog />),
    errorElement: <ErrorBoundary />
  }
  ,
  { 
    path: "/",
    element: (<Random />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('jwt')
      if(!!prev) return prev;
      else return null;
    },
  }
  ,
  {
    path: "/setup",
    element: (<Setup />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('jwt')
      if(!!prev) return redirect('/catalog')
      
      return prev;
    },
  },
{
    path: "/login",
    element: (<Login />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('jwt')
      if(!!prev) return redirect('/catalog')
      
      return prev;
    },
  },
  {
    path: "/contact",
    element: (<Contact />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('jwt')
      if(!!prev) return redirect('/catalog')
      
      return prev;
    },
  },
    {
    path: "/random",
    element: (<Rando />),
    errorElement: <ErrorBoundary />,
    loader: async () => {

      let prev = localStorage.getItem('jwt')
     
      console.log(prev)
      if(!!!prev) return redirect('/setup')
      else {

const today = new Date().toLocaleDateString();
  const lastClickedDate = localStorage.getItem('lastClickedDate');

  if (lastClickedDate === today) {
    const c = (localStorage.getItem('course'))
    console.log(c)
    // User has already clicked today
    if(c != "undefined" && c) {
      console.log('y tho')
      return redirect("/courses/" + JSON.parse(localStorage.getItem('course')).link);
    }
  } else {
    // User has not clicked today, update the storage with today's date
    localStorage.setItem('lastClickedDate', today);
    // return false;
  }
    console.log('bro')

        function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

        function getRandomCourse(courses) {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
}
let favoriteTopics = [], favoriteCategories = []
try {
    const response = await fetch(`${BASE_URL}/favorites`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      }
    });
    
    if (!response.ok) {
      console.log(response.body)
      throw new Error('Request failed with status ' + response.status);

    }

    const data = await response.json();
    console.log(data)
    favoriteCategories = data.genres;
    favoriteTopics = data.favorites;
    
  } catch (error) {
    console.error('Error:', error.message);
    return;
  }
console.log(favoriteTopics, favoriteCategories)
const suggestedCourses = other.filter(course =>
  favoriteTopics.some(
    topic =>
      topic.title === course.title ||
      favoriteCategories.includes(course.category)
  )
);
  


if (parseInt(3 * Math.random()) != 1) {
  shuffleArray(suggestedCourses);
  const suggestedCourse = suggestedCourses[0];
  console.log(suggestedCourse);
  localStorage.setItem('course', JSON.stringify(suggestedCourse))
  return redirect("/courses/" + suggestedCourse.link)
} else {
  const randomCourse = getRandomCourse(other);
  localStorage.setItem('course',JSON.stringify(randomCourse))
  return redirect("/courses/" + randomCourse.link)
}

      }

    
    },
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>course not</div>;
}
