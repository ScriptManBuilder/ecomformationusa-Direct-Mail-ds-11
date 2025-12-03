import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%);
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top, rgba(248, 249, 250, 0.1), transparent);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 6rem 2rem;

    &::after {
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;

    &::after {
      height: 80px;
    }
  }

  @media (max-width: 425px) {
    padding: 4rem 1.25rem;

    &::after {
      height: 60px;
    }
  }

  @media (max-width: 375px) {
    padding: 3.5rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 3rem 0.875rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Tagline = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-weight: 400;
  font-style: italic;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: -0.03em;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    line-height: 1.3;
  }

  @media (max-width: 320px) {
    font-size: 1.05rem;
    margin-bottom: 1rem;
  }
`;

export const Highlight = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-top: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    margin-top: 1.75rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;

  strong {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
    max-width: 500px;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

export const FeatureBadges = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
`;

export const FeatureBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(16, 185, 129, 0.25);
    border-color: rgba(16, 185, 129, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.875rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
    gap: 0.375rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const CTAButtonPrimary = styled.button`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1.15rem 3rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 350px;
  }

  @media (max-width: 375px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.85rem;
  }
`;

export const CTAButtonSecondary = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1.05rem 2.85rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.825rem 1.85rem;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0.7rem 1.6rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 350px;
  }

  @media (max-width: 375px) {
    padding: 0.65rem 1.4rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

