import styled from 'styled-components';

export const ContactFormContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent);
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const ContactFormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.1);

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 12px;
  }

  @media (max-width: 425px) {
    padding: 2rem 1.5rem;
  }
`;

export const ContactFormTitle = styled.h2`
  font-size: 2rem;
  color: #064e3b;
  margin-bottom: 0.75rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const ContactFormDescription = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.75rem;

  @media (max-width: 425px) {
    margin-bottom: 1.5rem;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #064e3b;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #1f2937;
  background: #ffffff;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #d1d5db;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #1f2937;
  background: #ffffff;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  &:hover:not(:focus) {
    border-color: #d1d5db;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
    min-height: 100px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

export const SuccessMessage = styled.div`
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
  border: 1px solid #10b981;
  border-radius: 8px;
  color: #065f46;
  font-size: 0.95rem;
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
  border: 1px solid #ef4444;
  border-radius: 8px;
  color: #991b1b;
  font-size: 0.95rem;
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
`;
