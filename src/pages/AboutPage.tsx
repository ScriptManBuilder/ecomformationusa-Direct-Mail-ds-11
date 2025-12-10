import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SupportHeader from '../components/SupportHeader';
import SupportFooter from '../components/SupportFooter';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
`;

const ContentWrapper = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 8px;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  border-radius: 8px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
  }
`;

const CTATitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const CTAHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background: #111827;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1f2937;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
`;

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Revylant';

  const handleGetHelp = () => {
    navigate('/support');
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <PageContainer>
      <SupportHeader />
      <ContentWrapper>
        <ContentContainer>
          <Section>
            <SectionTitle>About Us</SectionTitle>
            <Paragraph>
              Our platform connects merchants with payment processors to quickly identify and resolve declined transactions. 
              If you're a customer who has experienced a failed payment, you may have received a notification about this charge.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Merchants</SectionTitle>
            <Paragraph>
              Merchants leverage our platform to recover declined payments efficiently. We offer a seamless integration that 
              enables businesses to begin recovering lost revenue from failed transactions immediately.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Customers</SectionTitle>
            <Paragraph>
              As a customer, if your payment was declined, please review your email for details from us. The notification 
              includes information about the declined transaction, along with details about the associated merchant.
            </Paragraph>
            <Paragraph>
              If you haven't received an email notification, please reach out to us through our contact form. 
              We'll respond as quickly as possible to assist you.
            </Paragraph>
          </Section>

          <CTASection>
            <CTATitle>ISSUE NOT RESOLVED?</CTATitle>
            <CTAHeading>Get in touch with us today.</CTAHeading>
            <CTAButton onClick={handleGetHelp}>Get Help</CTAButton>
          </CTASection>
        </ContentContainer>
      </ContentWrapper>
      <SupportFooter />
    </PageContainer>
  );
};

export default AboutPage;
