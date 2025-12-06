import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.eformdirectmail.com';

  const handleRequestDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpeakToSales = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Recover Revenue Lost to Declined Payments
        </HeroTitle>
        <HeroDescription>
          Our decline-salvage engine helps merchants recover <strong style={{color: '#34d399', fontSize: '1.2em'}}>up to 15%</strong> of failed transactions—<strong>automatically</strong>, <strong>securely</strong>, and <strong>without interrupting</strong> your checkout flow.
        </HeroDescription>
        <Tagline>We specialize in serving merchants who acquire customers through <strong style={{color: '#34d399'}}>direct mail campaigns</strong>. Our decline recovery technology is optimized for businesses using catalog, mail-order, and postal-based acquisition flows.</Tagline>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleRequestDemo}>
            Request a Demo
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleSpeakToSales}>
            Speak to Sales
          </CTAButtonSecondary>
        </CTAButtonGroup>
        <Highlight>We serve only direct mail clients.</Highlight>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
