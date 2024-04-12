import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <div className='Navbar-container'>
          <div>
            <svg viewBox="0 0 138 26" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" title="CodePen"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
          </div>
          <div>
            <h3>Try your Online Editor</h3>
          </div>
          <div className='btn-container'>
            <Link to="/auth">
              <button className='btn1'>SIGN UP</button>
            </Link>
            <Link to="/auth">
              <button className='btn2'>LOG IN</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
