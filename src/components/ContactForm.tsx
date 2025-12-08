import React, { useState } from 'react';
import {
  ContactFormContainer,
  ContactFormWrapper,
  ContactFormTitle,
  ContactFormDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  SuccessMessage,
  ErrorMessage
} from '../styles/ContactForm.styles';

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey = process.env.REACT_APP_CONTACT_FORM_ACCESS_KEY;

    if (!accessKey) {
      console.error('Contact form access key is not configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission - Customer Support'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Auto close after success
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFormContainer id="contact-form">
      <ContactFormWrapper>
        <ContactFormTitle>Contact Us</ContactFormTitle>
        <ContactFormDescription>
          Fill out the form below to get in touch with us.
        </ContactFormDescription>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Please provide us with the last 4 digits of the card that was charged or any other relevant information."
            />
          </FormGroup>

          {submitStatus === 'success' && (
            <SuccessMessage>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </SuccessMessage>
          )}

          {submitStatus === 'error' && (
            <ErrorMessage>
              Something went wrong. Please try again or contact us directly.
            </ErrorMessage>
          )}

          <FormButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </FormButton>
        </form>
      </ContactFormWrapper>
    </ContactFormContainer>
  );
};

export default ContactForm;
