import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs header">
      <li className="nav-item">
        <a class = "nav-text"
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
        <h2 class="nav-text">Home</h2>
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <h2 class="nav-text">About</h2>
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
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
    </ul>
  );
}

export default NavTabs;
