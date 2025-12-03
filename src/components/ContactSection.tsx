import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'PCI-Compliant Infrastructure',
      description: 'Enterprise-grade security for payment data handling. Our platform meets PCI DSS Level 1 certification requirements.'
    },
    {
      title: 'GDPR & CCPA Compliant',
      description: 'Full compliance with data protection regulations. Transparent data handling and merchant-controlled retention policies.'
    },
    {
      title: 'Secure API Integration',
      description: 'OAuth 2.0 authentication, encrypted data transmission, and real-time monitoring for all merchant integrations.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Ready to Recover Lost Revenue?</ContactTitle>
        <ContactDescription>
          See how our decline-salvage system can improve your billing performance. Request a demo or speak with our sales team to learn more.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Request a Demo</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#8B5CF6', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Demo request received! Our sales team will contact you within 24 hours.
              </div>
            )}
            <p>Fill out the form below and our team will reach out to schedule a personalized demo.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Company Name</FormLabel>
              <FormInput 
                type="text" 
                name="company"
                placeholder="Your company name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Contact Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Business Email</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="you@yourcompany.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message (Optional)</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Tell us about your business, payment volume, current decline rates, or specific questions..." 
                rows={5}
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoTitle>Contact Sales</InfoTitle>
              <InfoDescription>
                <strong>Sales Email:</strong>
                <br />
                <span style={{ fontWeight: 600, userSelect: 'none', pointerEvents: 'none' }}>
                  {process.env.REACT_APP_EMAIL_SUPPORT}
                </span>
              </InfoDescription>
              <InfoDescription style={{ marginTop: '1rem' }}>
                <strong>Phone:</strong>
                <br />
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
