import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';

const EndUserTermsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>End-User Terms of Service</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>1. Acceptance of Terms</LegalSectionTitle>
            <LegalParagraph>
              We serve only direct mail clients. These End-User Terms of Service ("End-User Terms") govern your use of services provided by 
              {process.env.REACT_APP_COMPANY_NAME} when you make a purchase through our direct mail offers.
            </LegalParagraph>
            <LegalParagraph>
              By completing a transaction, making a payment, or using our customer assistance services, 
              you acknowledge that you have read, understood, and agree to be bound by these End-User Terms.
            </LegalParagraph>
            <LegalParagraph>
              If you do not agree to these terms, please do not complete your purchase or use our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>2. Service Description</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides customer payment assistance services for direct mail purchases. 
              Our services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Processing:</strong> Secure processing of payments for products ordered through direct mail
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Assistance:</strong> Help with updating payment information when cards are declined
              </LegalListItem>
              <LegalListItem>
                <strong>Order Support:</strong> Assistance with completing your order and tracking delivery
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Service:</strong> Support for questions about your direct mail order
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Communications:</strong> Email and phone support for payment-related inquiries
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We process payments for products you ordered via direct mail. The products and services are provided 
              by the merchant whose offer you responded to.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>3. User Eligibility</LegalSectionTitle>
            <LegalParagraph>
              To use our services, you must:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Be at least 18 years of age or the age of majority in your jurisdiction</LegalListItem>
              <LegalListItem>Have the legal capacity to enter into binding agreements</LegalListItem>
              <LegalListItem>Provide accurate and complete information when making payments</LegalListItem>
              <LegalListItem>Have authorization to use the payment method provided</LegalListItem>
              <LegalListItem>Not be prohibited from using our services by applicable law</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              By using our services, you represent and warrant that you meet these eligibility requirements.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>4. Payment Authorization</LegalSectionTitle>
            <LegalParagraph>
              When you provide payment information through our platform:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Authorization:</strong> You authorize us to process payment on behalf of the merchant for the amount 
                specified in the transaction
              </LegalListItem>
              <LegalListItem>
                <strong>Accuracy:</strong> You warrant that all payment information provided (card number, expiration date, 
                billing address, etc.) is accurate and up-to-date
              </LegalListItem>
              <LegalListItem>
                <strong>Ownership:</strong> You confirm that you are authorized to use the payment method and that you have 
                sufficient funds or credit available
              </LegalListItem>
              <LegalListItem>
                <strong>Retry Authorization:</strong> By providing updated payment information, you authorize retry attempts 
                for previously declined transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Processors:</strong> Payments are processed through third-party payment processors 
                (Stripe, PayPal, etc.) subject to their terms
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>5. Account Security</LegalSectionTitle>
            <LegalParagraph>
              You are responsible for maintaining the security of your account and payment information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Confidentiality:</strong> Keep account credentials, payment links, and verification codes confidential
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Access:</strong> Access payment links only from secure devices and networks
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Use:</strong> Notify us immediately at {process.env.REACT_APP_EMAIL_SUPPORT} if you 
                suspect unauthorized use of your account
              </LegalListItem>
              <LegalListItem>
                <strong>Verification:</strong> We may request additional verification to protect against fraud
              </LegalListItem>
              <LegalListItem>
                <strong>Liability:</strong> You are responsible for all transactions made using your payment information 
                until you report unauthorized use
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>6. Communication Preferences</LegalSectionTitle>
            <LegalParagraph>
              By using our services, you consent to receive communications:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Transactional Communications:</strong> Payment receipts, transaction confirmations, and account notifications
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Reminders:</strong> Email and SMS reminders about pending, failed, or upcoming payments
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Support:</strong> Responses to inquiries and support requests
              </LegalListItem>
              <LegalListItem>
                <strong>Service Updates:</strong> Important updates about our services or changes to terms
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To opt out of non-essential communications, click "unsubscribe" in emails or reply STOP to SMS messages. 
              Note that you cannot opt out of transactional communications required to provide services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>7. Prohibited Activities</LegalSectionTitle>
            <LegalParagraph>
              You may not use our services to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Submit fraudulent payment information or engage in payment fraud</LegalListItem>
              <LegalListItem>Use stolen credit cards, compromised payment methods, or unauthorized accounts</LegalListItem>
              <LegalListItem>Attempt to circumvent security measures or access controls</LegalListItem>
              <LegalListItem>Interfere with or disrupt the operation of our systems or services</LegalListItem>
              <LegalListItem>Reverse engineer, decompile, or attempt to derive source code from our platform</LegalListItem>
              <LegalListItem>Use automated tools (bots, scrapers, etc.) to access our services without authorization</LegalListItem>
              <LegalListItem>Impersonate another person or entity</LegalListItem>
              <LegalListItem>Violate any applicable laws or regulations</LegalListItem>
              <LegalListItem>Abuse, harass, or threaten our staff or support personnel</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Violation of these prohibitions may result in immediate termination of access, reporting to authorities, 
              and legal action.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>8. Refunds and Disputes</LegalSectionTitle>
            <LegalParagraph>
              Regarding refunds and transaction disputes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Responsibility:</strong> Refund requests should be directed to the merchant, not to 
                {process.env.REACT_APP_COMPANY_NAME}
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> The merchant's refund policy governs all refund requests
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Assistance:</strong> We will assist in facilitating refunds as directed by the merchant
              </LegalListItem>
              <LegalListItem>
                <strong>Chargebacks:</strong> Before initiating a chargeback, contact the merchant and us to resolve the issue
              </LegalListItem>
              <LegalListItem>
                <strong>Disputed Charges:</strong> Report unauthorized or incorrect charges to {process.env.REACT_APP_EMAIL_SUPPORT} 
                within 60 days
              </LegalListItem>
              <LegalListItem>
                <strong>Investigation:</strong> We will investigate disputed charges and work with you and the merchant to resolve
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>9. Data Privacy</LegalSectionTitle>
            <LegalParagraph>
              Your privacy is important to us:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We collect and process personal information as described in our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                Payment information is encrypted and processed in accordance with PCI-DSS standards
              </LegalListItem>
              <LegalListItem>
                We share data with merchants only as necessary to complete transactions and provide services
              </LegalListItem>
              <LegalListItem>
                You have rights regarding your personal data, including access, correction, and deletion
              </LegalListItem>
              <LegalListItem>
                To exercise your privacy rights, submit a Data Subject Request or contact {process.env.REACT_APP_EMAIL_SUPPORT}
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete information about how we collect, use, and protect your data, please review our Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>10. Disclaimer of Warranties</LegalSectionTitle>
            <LegalParagraph>
              Our services are provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not guarantee that services will be uninterrupted, timely, secure, or error-free
              </LegalListItem>
              <LegalListItem>
                We do not warrant that payment processing will be successful or that transactions will not be declined
              </LegalListItem>
              <LegalListItem>
                We are not responsible for issues caused by your payment provider, bank, or card issuer
              </LegalListItem>
              <LegalListItem>
                We disclaim all warranties, express or implied, including warranties of merchantability and fitness for 
                a particular purpose
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of implied warranties, so some of the above may not apply to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>11. Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                {process.env.REACT_APP_COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, 
                or exemplary damages
              </LegalListItem>
              <LegalListItem>
                Our total liability for any claim shall not exceed the amount of the transaction in question or $100, 
                whichever is less
              </LegalListItem>
              <LegalListItem>
                We are not liable for losses resulting from unauthorized use of your account if you failed to secure your credentials
              </LegalListItem>
              <LegalListItem>
                We are not liable for merchant actions, product quality, or fulfillment issues
              </LegalListItem>
              <LegalListItem>
                We are not responsible for service interruptions caused by third parties, network issues, or circumstances 
                beyond our control
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>12. Indemnification</LegalSectionTitle>
            <LegalParagraph>
              You agree to indemnify and hold harmless {process.env.REACT_APP_COMPANY_NAME}, its affiliates, officers, 
              employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your use of our services</LegalListItem>
              <LegalListItem>Your violation of these End-User Terms</LegalListItem>
              <LegalListItem>Your violation of any rights of another party</LegalListItem>
              <LegalListItem>Fraudulent or unauthorized use of payment methods</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>13. Termination</LegalSectionTitle>
            <LegalParagraph>
              We may terminate or suspend your access to services:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>For violation of these End-User Terms or applicable laws</LegalListItem>
              <LegalListItem>For suspected fraudulent activity or security concerns</LegalListItem>
              <LegalListItem>At the request of a merchant or payment processor</LegalListItem>
              <LegalListItem>For any reason with or without notice</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Upon termination, your right to use our services ends immediately. Provisions regarding liability, indemnification, 
              and dispute resolution survive termination.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>14. Governing Law and Dispute Resolution</LegalSectionTitle>
            <LegalParagraph>
              These End-User Terms are governed by the laws of the State of Florida, United States, without regard to 
              conflict of law principles.
            </LegalParagraph>
            <LegalParagraph>
              Any disputes shall be resolved through:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Informal Resolution:</strong> First, contact us at {process.env.REACT_APP_EMAIL_SUPPORT} to attempt 
                to resolve the dispute informally
              </LegalListItem>
              <LegalListItem>
                <strong>Binding Arbitration:</strong> If informal resolution fails, disputes shall be resolved by binding 
                arbitration under the rules of the American Arbitration Association
              </LegalListItem>
              <LegalListItem>
                <strong>Arbitration Location:</strong> Arbitration shall take place in Winter Haven, Florida or remotely by mutual agreement
              </LegalListItem>
              <LegalListItem>
                <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive the 
                right to participate in class actions
              </LegalListItem>
              <LegalListItem>
                <strong>Small Claims Court:</strong> Either party may pursue claims in small claims court as an alternative 
                to arbitration
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>15. Changes to Terms</LegalSectionTitle>
            <LegalParagraph>
              We may modify these End-User Terms at any time. Changes are effective immediately upon posting. Your continued 
              use of services after changes constitutes acceptance of the updated terms. Material changes will be communicated 
              via email or prominent notice on our platform.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>16. Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For questions, concerns, or support regarding these End-User Terms or our services:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default EndUserTermsPage;
