import React from 'react';
import '../Styles.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="container d-flex flex-column justify-content-center h-100">
        <h3 className='footer-heading'>Acme Notes</h3>
        <p className='footer-description'>Keep track of your notes and ideas with Acme Notes</p>
        <ul className="footer-links">
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
        <div className="mt-auto">
          <p>Follow us on social media:</p>
          <div className="social-icons">
            {/* Add your social media icons here */}
          </div>
          <button className='scroll-top-button' onClick={scrollToTop}>
            <i className='bi bi-arrow-up'></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
