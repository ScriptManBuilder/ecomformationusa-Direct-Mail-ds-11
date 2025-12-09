import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066cc;
  cursor: pointer;
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: #374151;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #0066cc;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RequestButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #333;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const SupportHeader: React.FC = () => {
  const navigate = useNavigate();
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Revylant';

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/company-info');
  };

  const handleSupportClick = () => {
    if (window.location.pathname === '/support') {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/support');
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleFaqClick = () => {
    const faqSection = document.querySelector('#faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestRefund = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          {brandName}
        </Logo>
        
        <Nav>
          <NavLink onClick={handleAboutClick}>About</NavLink>
          <NavLink onClick={handleSupportClick}>Support</NavLink>
          <NavLink onClick={handleFaqClick}>Faq</NavLink>
          <RequestButton onClick={handleRequestRefund}>Request Refund</RequestButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default SupportHeader;