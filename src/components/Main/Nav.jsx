import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../assets/img/Nav/Home.png';
import Galary from '../../assets/img/Nav/Galary.png';
import Time from '../../assets/img/Nav/Time.png';
import Home_A from '../../assets/img/Nav/Home_active.png';
import Galary_A from '../../assets/img/Nav/Galary_active.png';
import Time_A from '../../assets/img/Nav/Time_active.png';

const Nav = () => {
  const location = useLocation();

  return (
    <div className='Nav_wrap'>
      <Link to='/Archive' className={location.pathname === '/Archive' ? 'active' : ''}>
        <img
          src={Galary}
          alt="Archive"
          className={`default ${location.pathname === '/Archive' ? 'none' : ''}`}
        />
        <img src={Galary_A} alt="Archive Active" className="active" />
      </Link>
      <Link to='/main' className={location.pathname === '/main' ? 'active' : ''}>
        <img
          src={Home}
          alt="Home"
          className={`default ${location.pathname === '/main' ? 'none' : ''}`}
        />
        <img src={Home_A} alt="Home Active" className="active" />
      </Link>
      <Link to='/Like' className={location.pathname === '/Like' ? 'active' : ''}>
        <img
          src={Time}
          alt="Like"
          className={`default ${location.pathname === '/Like' ? 'none' : ''}`}
        />
        <img src={Time_A} alt="Like Active" className="active" />
      </Link>
    </div>
  );
};

export default Nav;
