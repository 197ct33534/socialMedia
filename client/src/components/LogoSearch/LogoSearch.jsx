import React from 'react';
import './LogoSearch.scss';
import Logo from 'img/logo.png';
import SearchIcon from '@mui/icons-material/Search';
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="Search.." />
        <div className="Search__icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
