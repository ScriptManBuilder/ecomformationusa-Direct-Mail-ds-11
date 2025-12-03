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

const CompanyInfoPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Company Information</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>About Our Company</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} is a B2B fintech platform specializing in decline salvage and involuntary churn reduction 
              for subscription businesses, SaaS companies, and e-commerce merchants. We help businesses recover failed transactions and retain 
              customers whose payments declined due to expired cards, insufficient funds, or temporary payment issues.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our platform integrates with your existing payment infrastructure and automates the recovery process through intelligent retry logic, 
              customer outreach, and self-service payment update tools. We serve growth-stage and enterprise merchants processing high volumes of 
              recurring transactions.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Company Details</LegalSectionTitle>
            <LegalParagraph style={{ fontWeight: 600 }}>
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
              We provide comprehensive decline salvage platform services for merchants:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>API-First Integration:</strong> RESTful API for seamless integration with your payment stack and subscription management system
              </LegalListItem>
              <LegalListItem>
                <strong>Automated Recovery:</strong> Smart algorithms that optimize retry timing and customer outreach for maximum recovery rates
              </LegalListItem>
              <LegalListItem>
                <strong>Self-Service Portal:</strong> Branded, hosted payment pages where your customers can update payment methods securely
              </LegalListItem>
              <LegalListItem>
                <strong>Real-Time Analytics:</strong> Dashboard with recovery metrics, revenue impact, churn prevention stats, and customer engagement data
              </LegalListItem>
              <LegalListItem>
                <strong>Multi-Channel Communication:</strong> Automated email and SMS campaigns to notify customers about payment issues
              </LegalListItem>
              <LegalListItem>
                <strong>Enterprise Support:</strong> Dedicated account management, integration assistance, and strategic consultation for platform optimization
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Established in {process.env.REACT_APP_COMPANY_BIRTH}, we have helped merchants recover millions in failed transactions and 
              significantly reduce involuntary churn across subscription-based businesses.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Billing & Invoicing</LegalSectionTitle>
            <LegalParagraph>
              When you subscribe to our platform services, the following billing descriptor will appear on your business 
              credit card or ACH bank statement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Billing Descriptor:</strong> "{process.env.REACT_APP_COMPANY_NAME}" or "{process.env.REACT_APP_BRAND_NAME}"
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Contact:</strong> {process.env.REACT_APP_PHONE_DISPLAY} will appear for billing inquiries
              </LegalListItem>
              <LegalListItem>
                <strong>Invoice Delivery:</strong> Monthly invoices sent via email to your billing contact
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For billing questions or to update payment methods, contact our accounts team at {process.env.REACT_APP_EMAIL_SUPPORT} 
              or call {process.env.REACT_APP_PHONE_DISPLAY}.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Payment Methods</LegalSectionTitle>
            <LegalParagraph>
              We accept the following payment methods for platform subscription fees and commissions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Business Credit Cards:</strong> Visa, Mastercard, American Express (corporate cards accepted)</LegalListItem>
              <LegalListItem><strong>ACH/Bank Transfer:</strong> Direct debit from your business bank account for monthly billing</LegalListItem>
              <LegalListItem><strong>Wire Transfer:</strong> Available for annual contracts or enterprise agreements</LegalListItem>
              <LegalListItem><strong>Net-30 Terms:</strong> Available for qualified enterprise merchants upon credit approval</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All merchant payment information is processed through PCI-DSS Level 1 compliant payment infrastructure. 
              Payment data is tokenized and encrypted at rest.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Security & Compliance</LegalSectionTitle>
            <LegalParagraph>
              Enterprise-grade security and compliance for merchant operations:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>PCI-DSS Level 1 Certified:</strong> Highest level of payment card industry compliance for handling your customers' payment data
              </LegalListItem>
              <LegalListItem>
                <strong>SOC 2 Type II Compliant:</strong> Audited controls for security, availability, and confidentiality (report available upon request)
              </LegalListItem>
              <LegalListItem>
                <strong>GDPR & CCPA Ready:</strong> Data processing agreements and merchant controls for global privacy compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Bank-Grade Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest
              </LegalListItem>
              <LegalListItem>
                <strong>Penetration Testing:</strong> Annual third-party security audits and continuous vulnerability scanning
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For security documentation, compliance reports, or integration security reviews, contact our enterprise team.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Support & Success</LegalSectionTitle>
            <LegalParagraph>
              Dedicated support for merchant platform operations:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Technical Support:</strong> API integration assistance, webhook troubleshooting, dashboard support
              </LegalListItem>
              <LegalListItem>
                <strong>Account Management:</strong> Strategic consultation, performance optimization, recovery strategy
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Support:</strong> Invoice questions, payment method updates, plan changes
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> {process.env.REACT_APP_EMAIL_SUPPORT} (24-hour response SLA for paid plans)
              </LegalListItem>
              <LegalListItem>
                <strong>Phone Support:</strong> {process.env.REACT_APP_PHONE_DISPLAY} (business hours for enterprise clients)
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Enterprise merchants receive priority support with dedicated account managers and faster response times.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Level Agreement (SLA)</LegalSectionTitle>
            <LegalParagraph>
              Our platform performance and support commitments:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Platform Uptime:</strong> 99.9% uptime guarantee (excludes scheduled maintenance windows)
              </LegalListItem>
              <LegalListItem>
                <strong>API Response Time:</strong> Average API latency under 200ms for 95th percentile
              </LegalListItem>
              <LegalListItem>
                <strong>Support Response:</strong> 24-hour initial response for priority support tickets
              </LegalListItem>
              <LegalListItem>
                <strong>Downtime Credits:</strong> Prorated service credits for downtime exceeding SLA thresholds
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Full SLA terms and credit procedures available in your merchant service agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Contract Terms</LegalSectionTitle>
            <LegalParagraph>
              Platform subscription and service terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contract Term:</strong> Month-to-month or annual commitment (annual contracts receive pricing discount)
              </LegalListItem>
              <LegalListItem>
                <strong>Cancellation:</strong> 30-day written notice required for subscription cancellation
              </LegalListItem>
              <LegalListItem>
                <strong>Service Fees:</strong> Monthly subscription fee plus performance-based commission on recovered revenue
              </LegalListItem>
              <LegalListItem>
                <strong>Fee Refunds:</strong> Prorated credits for platform downtime exceeding SLA commitments
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Complete contract terms available in our Merchant Service Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Agreements & Policies</LegalSectionTitle>
            <LegalParagraph>
              Your platform subscription is governed by the following merchant agreements:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Service Agreement:</strong> Complete terms governing platform usage, fees, and service delivery
              </LegalListItem>
              <LegalListItem>
                <strong>Data Processing Agreement:</strong> How we process your customers' payment data on your behalf
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> How we collect, use, and protect merchant business information
              </LegalListItem>
              <LegalListItem>
                <strong>Service Fee Policy:</strong> Subscription fees, commission structure, and billing terms
              </LegalListItem>
              <LegalListItem>
                <strong>API Terms:</strong> Terms governing API access, rate limits, and integration requirements
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All merchant agreements are available in your account dashboard. By subscribing to our platform, you agree to 
              these terms and conditions.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Our Team</LegalSectionTitle>
            <LegalParagraph>
              For platform demos, sales inquiries, or merchant support:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Merchant Services & Sales
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Sales Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Sales Phone: {process.env.REACT_APP_PHONE_DISPLAY}
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

export default CompanyInfoPage;
