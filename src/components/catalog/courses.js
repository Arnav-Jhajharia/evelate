import React, { useEffect, useState } from 'react';
import courses from './courseDetails'
import './styles.css'
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import NavBar from './../navbar/navbar'
import { FaSearch } from 'react-icons/fa';
const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const messages1 = document.querySelectorAll('.category');
    // messages1[0].style.fontSize = '4rem';
    const messagesArray = Array.prototype.slice.call(messages1).slice(0)
    console.log(messagesArray)
    ScrollReveal().reveal(messagesArray, {
        delay: 200,
        distance: '50px',
        duration: 200,
        interval: 200

    });

    ScrollReveal().reveal('.catalog-page')

  }, [])

  const filteredCourses = Object.entries(courses)
    .filter(([category, courses]) => {
        console.log([category, courses])
      // Filter courses based on search query and category
      const filteredByCategory = category.toLowerCase().includes(searchQuery.toLowerCase());
      const filteredByCourse = courses.some((course) => course.title.toLowerCase().includes(searchQuery.toLowerCase()));
      return filteredByCategory || filteredByCourse;
    })
    .reduce((acc, [category, courses]) => {
      // Create filtered categories and courses object
      if(category.toLowerCase().includes(searchQuery.toLowerCase())) {
        acc[category] = courses;
        return acc;
      };
      acc[category] = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return acc;
    }, {});

    console.log(filteredCourses)

  return (
    <div className="catalog-page">
      <NavBar type = "catalog" name = "" />
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <div className="catalog-content">
        {Object.entries(filteredCourses).map(([category, courses]) => (
            
          <div className="category" key={category}>
            <h2 className="category-title">{category}</h2>
            <ul className="course-list">
              {courses.map((course) => (
                            <Link to = {`/courses/${course.link}`} style={{textDecoration: 'none', color: 'white'}}>

                             <div className="card" style={{width: '20rem', height: '30rem'}}>
                             <img className="card-img-top" src = {process.env.PUBLIC_URL + '/courses/' + course.image}alt="Card image cap" />
                             <div className="card-body">
                               <h2 className="card-title">{course.title}</h2>
                               <p className="card-text">{course.description}</p>
                               {/* <p href="#" className="btn btn-primary">Let's go shall we?</p> */}
                             </div>
                           </div>  </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
