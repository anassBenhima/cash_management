import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from '../../utils';

const NavBar = ({  }) => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" style={{ marginLeft: '20px', }} href="/">Restaurant OMPT</a>

      
      <div style={{ marginLeft: 'auto', marginRight: '20px', cursor: 'pointer', }} onClick={() => { logout(); navigate("/"); }}>
        Se déconnecter
      </div>
    </nav>
  );
};

export default NavBar;
