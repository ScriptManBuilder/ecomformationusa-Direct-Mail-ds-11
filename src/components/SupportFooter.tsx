import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 3rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterSection = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #0066cc;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLabel = styled.div`
  color: #6b7280;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ContactValue = styled.div`
  color: #0066cc;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const Copyright = styled.div`
  text-align: left;
  color: #9ca3af;
  font-size: 0.875rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const SupportFooter: React.FC = () => {
  const navigate = useNavigate();
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Revylant';
  const phoneDisplay = process.env.REACT_APP_PHONE_DISPLAY || '1-844-630-1570';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@cartrescue.co';

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <SectionTitle>{brandName}</SectionTitle>
            <LinkList>
              <li><FooterLink onClick={() => navigate('/')}>Home</FooterLink></li>
              <li><FooterLink onClick={() => navigate('/company-info')}>About</FooterLink></li>
              <li><FooterLink onClick={() => {
                const faqSection = document.querySelector('#faq-section');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Faq</FooterLink></li>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Customer - Resources</SectionTitle>
            <LinkList>
              <li><FooterLink onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Request Refund</FooterLink></li>
              <li><FooterLink onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Contact</FooterLink></li>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Helpful Links</SectionTitle>
            <LinkList>
              <li><FooterLink onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Cancel Order</FooterLink></li>
              <li><FooterLink onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}>I was charged twice</FooterLink></li>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Quick Support</SectionTitle>
            <ContactInfo>
              <div>
                <ContactLabel>Customer Care Hotline</ContactLabel>
                <ContactValue>{phoneDisplay}</ContactValue>
              </div>
              <div>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>{supportEmail}</ContactValue>
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <Copyright>
          Copyright © {new Date().getFullYear()} {brandName}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default SupportFooter;
