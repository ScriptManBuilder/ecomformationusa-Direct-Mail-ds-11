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

const MerchantDisclosurePage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Merchant Platform Services Disclosure</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Important Platform Information</LegalSectionTitle>
            <LegalParagraph>
              This disclosure provides important information about {process.env.REACT_APP_COMPANY_NAME}, 
              our decline salvage platform, and the merchant services we provide. This information is provided in compliance with 
              SaaS industry standards, payment processor requirements, and business service regulations.
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Legal Business Name:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Address:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Contact Information:
            </LegalParagraph>
            <LegalParagraph>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours:
            </LegalParagraph>
            <LegalParagraph>
              Monday - Friday: 9:00 AM - 6:00 PM EST
            </LegalParagraph>
            <LegalParagraph>
              Saturday - Sunday: Closed
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Our Platform Services</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides a decline salvage platform designed exclusively for merchants to recover 
              failed transactions and reduce involuntary churn. Our platform services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>API Integration:</strong> RESTful API for transmitting failed transaction data and receiving recovery status updates
              </LegalListItem>
              <LegalListItem>
                <strong>Automated Recovery Workflows:</strong> Smart retries, customer outreach sequencing, and payment method update requests
              </LegalListItem>
              <LegalListItem>
                <strong>Hosted Payment Pages:</strong> PCI-compliant, branded pages where your customers can securely update payment information
              </LegalListItem>
              <LegalListItem>
                <strong>Multi-Channel Communications:</strong> Email and SMS templates for payment recovery notifications sent to your customers
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics Dashboard:</strong> Real-time metrics on decline rates, recovery success, revenue recovered, and customer engagement
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Support:</strong> Technical integration assistance, platform troubleshooting, and strategic consultation
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Established in {process.env.REACT_APP_COMPANY_BIRTH}, we serve B2B merchants across subscription businesses, SaaS companies, 
              e-commerce platforms, and direct-to-consumer brands.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How Charges Appear on Your Statement</LegalSectionTitle>
            <LegalParagraph>
              When you make a payment for your direct mail order, the following may appear on your credit card or 
              bank statement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Billing Descriptor:</strong> "{process.env.REACT_APP_COMPANY_NAME}" or "{process.env.REACT_APP_BRAND_NAME}"
              </LegalListItem>
              <LegalListItem>
                <strong>Contact Phone:</strong> {process.env.REACT_APP_PHONE_DISPLAY} will appear on your statement for questions
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              If you do not recognize a charge on your statement with these descriptors, please contact us immediately 
              at {process.env.REACT_APP_PHONE_DISPLAY} or {process.env.REACT_APP_EMAIL_SUPPORT} for assistance.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Transaction Processing</LegalSectionTitle>
            <LegalParagraph>
              Information about how transactions are processed:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Processors:</strong> We use industry-leading payment processors including Stripe and PayPal 
                to securely process transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Most transactions are processed immediately upon authorization
              </LegalListItem>
              <LegalListItem>
                <strong>Settlement:</strong> Charges typically appear on your statement within 1-3 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Currency:</strong> All transactions are processed in United States Dollars (USD) unless otherwise specified
              </LegalListItem>
              <LegalListItem>
                <strong>Authorization Holds:</strong> A temporary authorization hold may appear before the final charge is processed
              </LegalListItem>
              <LegalListItem>
                <strong>Failed Transactions:</strong> If a transaction fails, you will be notified and given an opportunity 
                to update payment information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Support and Success</LegalSectionTitle>
            <LegalParagraph>
              We are committed to providing excellent merchant support:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Methods:</strong> Reach our merchant support team by phone at {process.env.REACT_APP_PHONE_DISPLAY}, 
                by email at {process.env.REACT_APP_EMAIL_SUPPORT}, or through your merchant dashboard
              </LegalListItem>
              <LegalListItem>
                <strong>Response Time:</strong> We aim to respond to all merchant inquiries within 24 hours during business days
              </LegalListItem>
              <LegalListItem>
                <strong>Support Languages:</strong> Merchant support is available in English
              </LegalListItem>
              <LegalListItem>
                <strong>Priority Support:</strong> For urgent API issues, platform downtime, or technical emergencies, 
                call our priority support line for immediate assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Self-Service Portal:</strong> Access your merchant dashboard to configure settings, view analytics, 
                download reports, and manage API keys
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              Our refund policy is designed to be fair and transparent:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Refunds:</strong> Refunds for products or services purchased from merchants must be requested 
                directly from the merchant according to their refund policy
              </LegalListItem>
              <LegalListItem>
                <strong>Service Fees:</strong> Refunds for our service fees are governed by our Refund Policy, available on our website
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Approved refunds are processed within 5-10 business days to your original 
                payment method
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Requests:</strong> To request a refund, contact {process.env.REACT_APP_EMAIL_SUPPORT} with 
                your transaction details
              </LegalListItem>
              <LegalListItem>
                <strong>Disputed Charges:</strong> If you believe a charge is incorrect or unauthorized, contact us immediately 
                before initiating a chargeback
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms and conditions, please refer to our Refund Policy document.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Payment Methods Accepted</LegalSectionTitle>
            <LegalParagraph>
              We accept the following payment methods:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit Cards:</strong> Visa, Mastercard, American Express, Discover</LegalListItem>
              <LegalListItem><strong>Debit Cards:</strong> Visa Debit, Mastercard Debit with major card networks</LegalListItem>
              <LegalListItem><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> ACH transfers for qualified business accounts</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All payment methods are processed through PCI-DSS compliant payment processors. We do not store complete 
              credit card information on our servers.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Pricing and Fees</LegalSectionTitle>
            <LegalParagraph>
              Transparency in pricing and fees:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Subscription Fees:</strong> Monthly or annual subscription fees are charged to merchants, not end-users
              </LegalListItem>
              <LegalListItem>
                <strong>Commission Fees:</strong> We may charge merchants a commission on successfully recovered transactions
              </LegalListItem>
              <LegalListItem>
                <strong>No Hidden Fees:</strong> We do not charge end-users additional fees for payment processing beyond 
                the original transaction amount
              </LegalListItem>
              <LegalListItem>
                <strong>Currency Conversion:</strong> If applicable, currency conversion fees are disclosed before transaction completion
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Plan Fees:</strong> Any fees associated with payment plans or installment options are disclosed 
                at the time of transaction
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security and Privacy</LegalSectionTitle>
            <LegalParagraph>
              We take data security seriously:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>PCI-DSS Compliance:</strong> We maintain Payment Card Industry Data Security Standard (PCI-DSS) Level 1 compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Encryption:</strong> All payment information is encrypted using industry-standard SSL/TLS encryption 
                during transmission
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Storage:</strong> Sensitive data is encrypted at rest using AES-256 encryption
              </LegalListItem>
              <LegalListItem>
                <strong>Tokenization:</strong> Credit card numbers are tokenized and stored securely by our payment processors
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Our collection, use, and protection of personal information is governed by 
                our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Security:</strong> Our payment processors are certified PCI-DSS compliant and follow 
                strict security protocols
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For detailed information about how we protect your data, please review our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Billing Dispute Resolution</LegalSectionTitle>
            <LegalParagraph>
              If you have a billing dispute regarding platform subscription fees or commission charges:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Step 1 - Contact Billing Support:</strong> Email our billing team at {process.env.REACT_APP_EMAIL_SUPPORT} 
                or call {process.env.REACT_APP_PHONE_DISPLAY} with invoice details and dispute reason
              </LegalListItem>
              <LegalListItem>
                <strong>Step 2 - Investigation:</strong> Our billing team will review transaction logs, API usage, and invoice calculations within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Step 3 - Resolution:</strong> Valid billing errors will be corrected via credit or refund to your business payment method
              </LegalListItem>
              <LegalListItem>
                <strong>Step 4 - Escalation:</strong> Unresolved disputes may be escalated to senior management or handled according 
                to arbitration clauses in your Merchant Service Agreement
              </LegalListItem>
              <LegalListItem>
                <strong>Chargeback Prevention:</strong> We encourage direct resolution before initiating chargebacks, which may result 
                in account suspension per our service terms
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Security & Fraud Prevention</LegalSectionTitle>
            <LegalParagraph>
              We employ enterprise-grade security measures to protect merchant and customer data:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Real-Time Threat Monitoring:</strong> Continuous monitoring of API traffic and transaction patterns for anomalies
              </LegalListItem>
              <LegalListItem>
                <strong>API Authentication:</strong> OAuth 2.0, API key rotation, IP whitelisting, and rate limiting for merchant integrations
              </LegalListItem>
              <LegalListItem>
                <strong>Data Encryption:</strong> AES-256 encryption at rest, TLS 1.3 for data in transit
              </LegalListItem>
              <LegalListItem>
                <strong>Tokenization:</strong> Full payment card tokenization - no raw card data stored on our platform
              </LegalListItem>
              <LegalListItem>
                <strong>Fraud Scoring:</strong> Machine learning algorithms assess transaction risk and flag suspicious recovery attempts
              </LegalListItem>
              <LegalListItem>
                <strong>Reporting Security Incidents:</strong> Merchants must report suspected account breaches or API key compromises 
                immediately to {process.env.REACT_APP_PHONE_DISPLAY}
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Regulatory Compliance & Certifications</LegalSectionTitle>
            <LegalParagraph>
              Our platform maintains compliance with all applicable payment industry regulations:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>PCI-DSS Level 1:</strong> Highest level of payment card industry data security standard certification
              </LegalListItem>
              <LegalListItem>
                <strong>SOC 2 Type II:</strong> Annual third-party audits for security, availability, and confidentiality controls
              </LegalListItem>
              <LegalListItem>
                <strong>GDPR Compliance:</strong> Data Processing Agreements (DPA) available for merchants serving EU customers
              </LegalListItem>
              <LegalListItem>
                <strong>CCPA Compliance:</strong> California Consumer Privacy Act compliance for merchants serving California residents
              </LegalListItem>
              <LegalListItem>
                <strong>E-SIGN Act:</strong> Electronic signature compliance for merchant service agreements and customer communications
              </LegalListItem>
              <LegalListItem>
                <strong>State Registrations:</strong> Licensed and registered in all required jurisdictions for payment services
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Subscription & Billing Terms</LegalSectionTitle>
            <LegalParagraph>
              For merchants subscribed to recurring platform services:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Authorization:</strong> By subscribing, you authorize recurring charges to your business payment method until subscription cancellation
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Cycle:</strong> Monthly or annual subscription charges as specified in your pricing plan, plus performance-based commissions
              </LegalListItem>
              <LegalListItem>
                <strong>Invoice Notifications:</strong> Email invoices sent to billing contact 3-5 days before each charge
              </LegalListItem>
              <LegalListItem>
                <strong>Subscription Management:</strong> Cancel or modify subscriptions via merchant dashboard or by contacting account management
              </LegalListItem>
              <LegalListItem>
                <strong>Refund for Canceled Subscriptions:</strong> No refunds are provided for the remainder of the current 
                billing period after cancellation
              </LegalListItem>
              <LegalListItem>
                <strong>Failed Recurring Payments:</strong> If a recurring payment fails, we will notify you and attempt to 
                retry the charge with updated payment information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Terms and Conditions</LegalSectionTitle>
            <LegalParagraph>
              Use of our services is governed by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Terms of Service:</strong> Complete terms governing the use of our platform and services
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Details on how we collect, use, and protect your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> Terms and conditions for refunds and cancellations
              </LegalListItem>
              <LegalListItem>
                <strong>End-User Terms:</strong> Specific terms for end-users completing transactions through our platform
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All terms and policies are available on our website and were provided at the time of transaction. By completing 
              a transaction, you agree to these terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Disclosure</LegalSectionTitle>
            <LegalParagraph>
              We may update this Merchant Disclosure from time to time to reflect changes in our business practices, 
              regulatory requirements, or contact information. Material changes will be posted on our website and, where 
              appropriate, communicated to customers via email.
            </LegalParagraph>
            <LegalParagraph>
              The current version of this disclosure is always available at our website. We encourage you to review it 
              periodically to stay informed about how we process transactions and protect your information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For any questions about this Merchant Disclosure or our payment processing services:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Attention: Merchant Support Team
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
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
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

export default MerchantDisclosurePage;
