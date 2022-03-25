import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (


    
    <ul className="nav nav-tabs header">

<h1 class="nav-text1">Chuck Marlow Portfolio</h1>

     
     <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">About Me</h2>
        </a>
      </li>
     
     
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">Projects</h2>
        </a>
      </li>


      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

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
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        <h2 class="nav-text">Resume</h2>
        </a>
      </li>

      
    </ul>
  );
}

export default NavTabs;
