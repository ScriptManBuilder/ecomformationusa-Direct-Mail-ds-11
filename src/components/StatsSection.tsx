import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Step 1',
      description: 'Connect your gateway or merchant account. We integrate with all major payment processors via API or secure gateway links.',
      value: '01',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
    },
    {
      title: 'Step 2',
      description: 'Declined transactions are sent to our engine. Your system automatically forwards declined payments to us for reprocessing.',
      value: '02',
      background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)'
    },
    {
      title: 'Step 3',
      description: 'Our algorithm salvages a percentage of failed charges. Optimized retry sequences, alternative routing, and risk-aware logic recover up to 15% of declines.',
      value: '03',
      background: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 100%)'
    },
    {
      title: 'Step 4',
      description: 'You receive recovered revenue. Recovered funds are returned to you, minus our performance-based fee.',
      value: '04',
      background: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>How It Works</StatsSectionTitle>
        <StatsSectionDescription>
          Simple integration. Automated recovery. Performance-based pricing. Start recovering lost revenue in 4 easy steps.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
