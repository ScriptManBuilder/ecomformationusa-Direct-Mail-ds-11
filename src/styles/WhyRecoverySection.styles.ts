import styled from 'styled-components';

export const WhyRecoveryContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 6rem 1.5rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const WhyRecoveryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WhyRecoveryTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const WhyRecoveryDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a5568;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

export const StatHighlight = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  display: block;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BenefitCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
    border-color: #10b981;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const BenefitIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

