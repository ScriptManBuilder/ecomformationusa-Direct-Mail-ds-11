import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/support') {
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#10b981" opacity="0.1"/>
            <path d="M12 16C12 14.9 12.9 14 14 14H26C27.1 14 28 14.9 28 16V24C28 25.1 27.1 26 26 26H14C12.9 26 12 25.1 12 24V16Z" stroke="#10b981" strokeWidth="2" fill="none"/>
            <path d="M12 16L20 21L28 16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 22C24 23.66 22.66 25 21 25C19.34 25 18 23.66 18 22C18 20.34 19.34 19 21 19" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M23.5 19.5L21 19L21.5 21.5" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Mailvoro'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>What We Do</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>How It Works</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Results</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>Who We Serve</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Sales</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Merchant Support</Button>
          <Button $primary onClick={handleButtonClick}>Request Demo</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
