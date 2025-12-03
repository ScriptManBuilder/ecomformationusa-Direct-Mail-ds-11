import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SupportHero = styled.section`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  & > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  @media (max-width: 1024px) {
    & > div {
      flex-direction: column;
      gap: 3rem;
    }
    min-height: auto;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 650px;
  text-align: left;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 500px;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    max-height: 400px;
  }

  @media (max-width: 425px) {
    max-height: 300px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  background: rgba(16, 185, 129, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 425px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const PhoneIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const PhoneNumber = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;

  &:hover {
    color: #34d399;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const AvailabilityText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: white;
  color: #10b981;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: #f8f9fa;
  }

  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }
`;

export const HelpSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const HelpTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #065f46;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.65rem;
    margin-bottom: 2.5rem;
  }
`;

export const HelpGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
  }
`;

export const HelpCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12);
    border-color: rgba(16, 185, 129, 0.2);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
  }
`;

export const HelpIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #10b981, #34d399);
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

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 1.3rem;
  color: #065f46;
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1.15rem;
  }
`;

export const HelpCardDescription = styled.p`
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

// FAQ Section Styles
export const FAQSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const FAQSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #065f46;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const FAQSectionDescription = styled.p`
  font-size: 1.1rem;
  color: #5a6c7d;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ef;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #10b981;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
  }
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: ${props => props.$isOpen ? '#f8f9fa' : '#ffffff'};
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #065f46;
  transition: background 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }

  span {
    flex: 1;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
`;

export const FAQAnswer = styled.div`
  padding: 0 1.5rem 1.5rem;
  color: #5a6c7d;
  line-height: 1.7;
  font-size: 1rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    padding: 0 1rem 1rem;
    font-size: 0.9rem;
  }
`;

export const FAQIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    color: #10b981;
  }

  @media (max-width: 425px) {
    width: 20px;
    height: 20px;
  }
`;

