import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import FooterStyled from './Footer.styled';
const Footer = () => {
    const location = useLocation();

  return (
    <FooterStyled>
      <div className="footer">
        <div className="footer_left">
          <div className="footer_brand">Covid ID</div>
        </div>
        <ul className="footer_list">
          <li className="footer_item">
            <Link to="/" className={`link_item ${location.pathname == '/' && 'active'}`}>Global</Link>
          </li>
          <li className="footer_item">
            <Link to="/indonesia" className={`link_item ${location.pathname == '/indonesia' && 'active'}`}>Indonesia</Link>
          </li>
          <li className="footer_item">
            <Link to="/provinsi" className={`link_item ${location.pathname == '/provinsi' && 'active'}`}>Provinsi</Link>
          </li>
          <li className="footer_item">
            <Link to="/about" className={`link_item ${location.pathname == '/about' && 'active'}`}>About</Link>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

export default Footer;
