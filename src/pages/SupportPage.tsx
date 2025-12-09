import React, { useState } from 'react';
import {
  SupportContainer,
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  PhoneIcon,
  AvailabilityText,
  ActionButtons,
  ActionButton,
  HelpSection,
  HelpTitle,
  HelpGrid,
  HelpCard,
  HelpIcon,
  HelpCardTitle,
  HelpCardDescription,
  FAQSection,
  FAQSectionTitle,
  FAQSectionDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/SupportPage.styles';
import SupportHeader from '../components/SupportHeader';
import SupportFooter from '../components/SupportFooter';
import ContactForm from '../components/ContactForm';

const SupportPage: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `How does ${process.env.REACT_APP_BRAND_NAME} assist with transaction issues?`,
      answer: 'If you notice an unexpected charge, it\'s likely related to a recent purchase that may not have completed successfully. Our team can help you identify the specific transaction and assist in resolving any concerns you may have.'
    },
    {
      question: 'What does this charge on my statement mean?',
      answer: 'If you notice an unexpected charge, it\'s likely related to a transaction that didn\'t complete successfully. Our team can help you identify the specific transaction and assist in resolving any concerns you may have.'
    },
    {
      question: 'How can I get a refund?',
      answer: 'To request a refund, please contact us with your transaction details. Our team will work with the merchant on your behalf to process your refund request and keep you informed throughout the process.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our support team by phone during business hours or by filling out the contact form below. We\'re here to help resolve any billing questions or concerns you may have.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const helpTopics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      ),
      title: 'I don\'t recognize this charge',
      description: 'Unrecognized charges can be confusing and frustrating. We can help you identify the transaction and resolve your concern quickly.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      title: 'I want a refund',
      description: 'If you\'re unsatisfied with a product or service and want a refund, we can help you contact the merchant and request your money back.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'I was charged twice',
      description: 'If you\'ve been charged twice for the same product, we can help you identify the duplicate charge and get it refunded promptly.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'I want to cancel my order',
      description: 'If you want to cancel your order before it ships, we can help you contact the merchant and request a cancellation and full refund.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
      ),
      title: 'Cancel my subscription',
      description: 'We can help you cancel your subscription and prevent future charges from the merchant, ensuring a smooth and hassle-free experience.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: 'Product didn\'t arrive',
      description: 'If you haven\'t received the product you ordered, we can help you track the delivery and resolve the issue with the merchant.'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@joinserenity.ai';
  };

  const handleContactClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SupportHeader />
      <SupportContainer>
        <SupportHero>
          <div>
            <HeroImageWrapper>
              <HeroImage src="/heroSupport3.jpg" alt="Merchant Platform Support" />
            </HeroImageWrapper>
            
            <HeroContent>
              <HeroTitle>Customer Care</HeroTitle>
              <HeroDescription>Don't recognize a charge on your bank statement? We're here to help resolve your concerns.</HeroDescription>
            
              <ContactInfo>
                <PhoneIcon>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </PhoneIcon>
                <div>
                  <PhoneNumber>{process.env.REACT_APP_PHONE_DISPLAY}</PhoneNumber>
                  <AvailabilityText>Available Monday - Friday, 9 AM - 6 PM EST</AvailabilityText>
                </div>
              </ContactInfo>
            
              <ActionButtons>
                <ActionButton onClick={handleContactClick}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                  Get Help Now
                </ActionButton>
              </ActionButtons>
            </HeroContent>
          </div>
        </SupportHero>
        
        <HelpSection>
          <HelpTitle>How can we help you today?</HelpTitle>
          <HelpGrid>
            {helpTopics.map((topic, index) => (
              <HelpCard key={index} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                <HelpIcon>{topic.icon}</HelpIcon>
                <HelpCardTitle>{topic.title}</HelpCardTitle>
                <HelpCardDescription>{topic.description}</HelpCardDescription>
              </HelpCard>
            ))}
          </HelpGrid>
        </HelpSection>

        <FAQSection id="faq-section">
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQSectionDescription>Quick answers to common customer questions</FAQSectionDescription>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} $isOpen={openFAQIndex === index}>
                  <span>{faq.question}</span>
                  <FAQIcon $isOpen={openFAQIndex === index}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </FAQIcon>
                </FAQQuestion>
                {openFAQIndex === index && (
                  <FAQAnswer>
                    {faq.answer}
                    <div style={{ marginTop: '1rem' }}>
                      <ActionButton 
                        onClick={handleContactClick} 
                        style={{ 
                          fontSize: '0.9rem', 
                          padding: '0.6rem 1.25rem',
                          display: 'inline-flex'
                        }}
                      >
                        Contact Support
                      </ActionButton>
                    </div>
                  </FAQAnswer>

                )}
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>

        <ContactForm />
      </SupportContainer>
      <SupportFooter />
    </>
  );
};

export default SupportPage;