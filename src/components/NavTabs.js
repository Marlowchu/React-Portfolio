import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (


    
    <ul className="nav nav-tabs header">

<h1 class="nav-text1">Chuck Marlow Portfolio</h1>

     
     <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
         

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">About Me</h2>
        </a>
      </li>
     
     
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
        

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">Projects</h2>
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#contact"
        

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">Contact</h2>
        </a>
      </li>


      <li className="nav-item">
        <a class = "nav-text"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        <h2 class="nav-text">Resume</h2>
        </a>
      </li>

      
    </ul>
  );
}

export default NavTabs;
