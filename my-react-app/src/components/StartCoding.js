import React from 'react';
import { Link } from 'react-router-dom';
import './StartCoding.css';

function StartCoding() {
  return (
    <div className="background">
      <Link to="/Compiler" className="box-link">
        <div className="box">
          <p>Start Coding</p>
        </div>
      </Link>
    </div>
  );
}

export default StartCoding;
