import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function Successpage() {
  const navigate = useNavigate();
  return (
    <div className="successparentdiv">
      <div className="successwrapper">
        <div className="formsubmitted"> Your Form has been submitted! </div>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          {' '}
          Click here to go back to the homepage{' '}
        </div>
      </div>
    </div>
  );
}
