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

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Privacy Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} ("we," "us," or "our") is committed to protecting your business data privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard information from merchants when you use 
              our decline salvage platform, API services, and merchant dashboard.
            </LegalParagraph>
            <LegalParagraph>
              By using our platform services, you consent to the data practices described in this policy. If you do not agree 
              with this Privacy Policy, please do not integrate with or use our merchant services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Information We Collect from Merchants</LegalSectionTitle>
            <LegalParagraph>
              We collect several types of business information to provide and improve our decline salvage platform:
            </LegalParagraph>
            
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Merchant Business Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Company Details:</strong> Legal business name, DBA, tax identification (EIN), incorporation documents</LegalListItem>
              <LegalListItem><strong>Contact Information:</strong> Business email, phone, primary contact name, billing address</LegalListItem>
              <LegalListItem><strong>Payment Details:</strong> Bank account information for payouts, billing card for subscription fees</LegalListItem>
              <LegalListItem><strong>Integration Details:</strong> API keys, webhook URLs, payment processor credentials, technical contact information</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Platform Usage and Transaction Data
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>API Activity:</strong> API calls, request/response logs, rate limit usage, integration performance metrics</LegalListItem>
              <LegalListItem><strong>Transaction Data:</strong> Failed transaction records from your customers (provided via API), recovery attempts, success rates</LegalListItem>
              <LegalListItem><strong>Dashboard Activity:</strong> Login events, feature usage, report generation, settings configurations</LegalListItem>
              <LegalListItem><strong>Communication Records:</strong> Support tickets, merchant correspondence, technical assistance requests</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Technical and Security Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Authentication Data:</strong> Login credentials, API keys, OAuth tokens, session information</LegalListItem>
              <LegalListItem><strong>Device Information:</strong> IP addresses of merchant systems, server locations, integration environments</LegalListItem>
              <LegalListItem><strong>Analytics Data:</strong> Platform performance metrics, feature adoption, integration health, error logs</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Use Merchant Information</LegalSectionTitle>
            <LegalParagraph>
              We use merchant business information for the following platform purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Platform Operations:</strong> Process your subscription, manage merchant accounts, authenticate API access</LegalListItem>
              <LegalListItem><strong>Decline Salvage Services:</strong> Execute transaction recovery workflows, deliver customer outreach, track recovery rates</LegalListItem>
              <LegalListItem><strong>Merchant Support:</strong> Provide technical assistance, troubleshoot integrations, answer platform questions</LegalListItem>
              <LegalListItem><strong>Business Communications:</strong> Send invoices, platform updates, feature announcements, API deprecation notices</LegalListItem>
              <LegalListItem><strong>Platform Analytics:</strong> Analyze merchant success metrics, improve recovery algorithms, optimize platform performance</LegalListItem>
              <LegalListItem><strong>Compliance and Security:</strong> Prevent fraud, comply with payment processor requirements, maintain PCI-DSS compliance</LegalListItem>
              <LegalListItem><strong>Business Development:</strong> Send relevant product updates, integration tips, and platform enhancement opportunities (with consent)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Share Merchant Information</LegalSectionTitle>
            <LegalParagraph>
              We may share merchant business information with third parties in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Service Providers:</strong> Cloud infrastructure (AWS, Azure), email delivery (SendGrid), analytics platforms (Segment), 
                and payment processors who assist in delivering platform services
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Gateways:</strong> Your connected payment processors (Stripe, Braintree, etc.) receive transaction data 
                necessary for decline salvage operations
              </LegalListItem>
              <LegalListItem>
                <strong>Legal Requirements:</strong> Law enforcement, regulatory authorities, or courts when required by law, 
                subpoena, or to protect platform integrity
              </LegalListItem>
              <LegalListItem>
                <strong>Business Transfers:</strong> Potential acquirers, investors, or successors in the event of a merger, acquisition, 
                or sale of assets (with confidentiality protections)
              </LegalListItem>
              <LegalListItem>
                <strong>With Your Consent:</strong> Other third parties when you have given explicit consent through integration 
                approvals or API authorizations
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We do not sell merchant business information to third parties. We do not share your customer data with other merchants or competitors.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security</LegalSectionTitle>
            <LegalParagraph>
              We implement appropriate technical and organizational security measures to protect your information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Encryption:</strong> SSL/TLS encryption for data in transit, AES-256 encryption for data at rest</LegalListItem>
              <LegalListItem><strong>Access Controls:</strong> Role-based access, multi-factor authentication, regular access reviews</LegalListItem>
              <LegalListItem><strong>Network Security:</strong> Firewalls, intrusion detection systems, regular security audits</LegalListItem>
              <LegalListItem><strong>Monitoring:</strong> 24/7 security monitoring, incident response procedures</LegalListItem>
              <LegalListItem><strong>Compliance:</strong> PCI-DSS compliance for payment data, SOC 2 certification</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your 
              information, we cannot guarantee absolute security.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Retention</LegalSectionTitle>
            <LegalParagraph>
              We retain merchant business information for as long as necessary to fulfill platform services and comply with legal obligations:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Account Records:</strong> Merchant account data retained for duration of active subscription plus 7 years for compliance</LegalListItem>
              <LegalListItem><strong>Transaction Records:</strong> Failed transaction and recovery data retained for 10 years as required by financial regulations</LegalListItem>
              <LegalListItem><strong>API Logs:</strong> Request/response logs retained for 90 days for troubleshooting; summary metrics retained indefinitely</LegalListItem>
              <LegalListItem><strong>Support Records:</strong> Merchant support communications retained for 5 years for quality assurance and dispute resolution</LegalListItem>
              <LegalListItem><strong>Billing Records:</strong> Invoices, payment history, and subscription records retained for 10 years for tax and accounting purposes</LegalListItem>
              <LegalListItem><strong>Anonymized Data:</strong> Aggregated platform metrics and anonymized usage data may be retained indefinitely for research and analytics</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              As a merchant client, you have the following rights regarding your business information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Access:</strong> Request a copy of the business and transaction data we hold about your merchant account</LegalListItem>
              <LegalListItem><strong>Correction:</strong> Request correction of inaccurate merchant account information or integration settings</LegalListItem>
              <LegalListItem><strong>Deletion:</strong> Request deletion of your merchant account and associated data (subject to legal retention requirements)</LegalListItem>
              <LegalListItem><strong>Portability:</strong> Export your transaction data, recovery metrics, and customer records in machine-readable formats (CSV, JSON)</LegalListItem>
              <LegalListItem><strong>Restriction:</strong> Request limitation on processing of your merchant data for specific purposes</LegalListItem>
              <LegalListItem><strong>Objection:</strong> Object to processing of your business information for marketing or analytics purposes</LegalListItem>
              <LegalListItem><strong>Opt-Out:</strong> Unsubscribe from marketing communications while maintaining essential platform notifications</LegalListItem>
              <LegalListItem><strong>API Control:</strong> Revoke API keys, disable integrations, or withdraw platform access at any time</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To exercise these rights, please contact your account manager or email us using the information provided at the end of this policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Cookies and Tracking Technologies</LegalSectionTitle>
            <LegalParagraph>
              We use cookies and similar tracking technologies to enhance your experience:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Essential Cookies:</strong> Required for basic site functionality, authentication, and security
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </LegalListItem>
              <LegalListItem>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </LegalListItem>
              <LegalListItem>
                <strong>Marketing Cookies:</strong> Track visitor activity to deliver relevant advertisements
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect 
              the functionality of our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Third-Party Links</LegalSectionTitle>
            <LegalParagraph>
              Our website may contain links to third-party websites and services. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies of any 
              third-party sites you visit.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Children's Privacy</LegalSectionTitle>
            <LegalParagraph>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child without 
              parental consent, we will take steps to delete that information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>International Data Transfers</LegalSectionTitle>
            <LegalParagraph>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in place 
              to protect your information in accordance with this Privacy Policy and applicable laws.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Privacy Policy</LegalSectionTitle>
            <LegalParagraph>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of material changes by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Posting the updated policy on our website with a new "Last Updated" date</LegalListItem>
              <LegalListItem>Sending an email notification to your registered email address</LegalListItem>
              <LegalListItem>Displaying a prominent notice on our website or dashboard</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPage;
