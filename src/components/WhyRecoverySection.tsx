import React from 'react';
import {
  WhyRecoveryContainer,
  WhyRecoveryContent,
  WhyRecoveryTitle,
  WhyRecoveryDescription,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  StatHighlight
} from '../styles/WhyRecoverySection.styles';

const WhyRecoverySection: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      title: 'Recover Otherwise Lost Revenue',
      description: 'Turn failed transactions into actual income. Every recovered payment goes straight to your bottom line without additional customer acquisition costs.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: 'Reduce Involuntary Churn',
      description: 'Keep customers who want to stay but whose payments fail. Most declined transactions are due to temporary issues, not intentional cancellations.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Improve Customer Lifetime Value',
      description: 'Retain customers longer by preventing involuntary cancellations. Higher retention translates directly to increased LTV and ROI on acquisition spend.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ),
      title: 'Maintain Smoother Billing Cycles',
      description: 'Automated recovery reduces billing interruptions and customer friction. Clean up your subscription revenue and maintain predictable cash flow.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Boost Profitability Without Increasing Spend',
      description: 'Increase revenue without additional marketing costs. Recovery fees are performance-based—you only pay when we successfully recover a transaction.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Reduce Payment Processing Costs',
      description: 'Lower overall chargeback rates and dispute volume. Better payment success means fewer administrative costs and improved processor relationships.'
    }
  ];

  return (
    <WhyRecoveryContainer id="why-recovery">
      <WhyRecoveryContent>
        <WhyRecoveryTitle>Why Recovery Matters</WhyRecoveryTitle>
        <WhyRecoveryDescription>
          <StatHighlight>30%+ of transactions fail on the first attempt.</StatHighlight>
          <br /><br />
          Most failures are preventable—soft declines, issuer friction, outdated card data, and processor routing issues. 
          Our decline-salvage platform helps you capture revenue that would otherwise be lost forever.
        </WhyRecoveryDescription>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>
                {benefit.icon}
              </BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </WhyRecoveryContent>
    </WhyRecoveryContainer>
  );
};

export default WhyRecoverySection;
