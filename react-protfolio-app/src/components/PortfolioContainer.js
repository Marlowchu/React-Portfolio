import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
   
      {renderPage()}

      <footer>
      <section>
       
          <ul id="email"><strong>Email:</strong> <a href="mailto:marlowchu@gmail.com">marlowchu@gmail.com</a></ul>
          <ul id="github"><strong>GitHub:</strong> <a href="https://github.com/Marlowchu" target="_blank">github.com/Marlowchu</a></ul>
          <ul id="linkedin"><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/chuck-marlow-956403a1" target="_blank">linkedin.com/Marlowchu</a></ul>
        
      </section>
    </footer>
    </div>
  );
}
