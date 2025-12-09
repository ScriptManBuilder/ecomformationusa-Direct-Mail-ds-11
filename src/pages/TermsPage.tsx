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

const TermsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Merchant Service Agreement</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Agreement to Terms</LegalSectionTitle>
            <LegalParagraph>
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Merchant," "Client," "you," or "your business") and {process.env.REACT_APP_COMPANY_NAME} 
              ("Company," "Platform," "we," "us," or "our") concerning your access to and use of our decline salvage platform, API services, and 
              merchant payment recovery services.
            </LegalParagraph>
            <LegalParagraph>
              By integrating with our platform or using our services, you agree that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree with these Terms, you must not access or use our platform or services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Services Description</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides a decline salvage platform designed to help 
              merchants recover failed transactions and reduce involuntary churn. Our platform services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>API integration for failed transaction detection and recovery workflows</LegalListItem>
              <LegalListItem>Automated customer outreach for payment method updates</LegalListItem>
              <LegalListItem>Secure hosted payment pages for your customers' self-service updates</LegalListItem>
              <LegalListItem>Real-time dashboard and analytics for decline tracking and recovery rates</LegalListItem>
              <LegalListItem>Webhook notifications for successful payment recovery events</LegalListItem>
              <LegalListItem>Multi-channel communication management (email, SMS) for payment reminders</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Accounts and API Access</LegalSectionTitle>
            <LegalParagraph>
              To access our decline salvage platform, you must create a merchant account and complete integration. You agree to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Provide accurate business information including legal entity name, tax identification, and billing details</LegalListItem>
              <LegalListItem>Maintain and promptly update your merchant account information and integration settings</LegalListItem>
              <LegalListItem>Secure API keys, webhooks, and account credentials using industry-standard security practices</LegalListItem>
              <LegalListItem>Accept responsibility for all API calls, transactions, and activities under your merchant account</LegalListItem>
              <LegalListItem>Notify us immediately of any unauthorized access, API key compromise, or security breach</LegalListItem>
              <LegalListItem>Comply with all applicable payment card industry standards and data protection regulations</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We reserve the right to suspend or terminate your merchant account if you violate these Terms, exceed rate limits, 
              engage in fraudulent activities, or violate our Acceptable Use Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Fees and Billing</LegalSectionTitle>
            <LegalParagraph>
              Your subscription to our decline salvage platform includes the following fee structure and billing terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Monthly or annual subscription fees based on your selected pricing tier and transaction volume</LegalListItem>
              <LegalListItem>Success-based commission on recovered transactions (percentage varies by plan)</LegalListItem>
              <LegalListItem>All service fees are billed monthly in arrears to your designated payment method</LegalListItem>
              <LegalListItem>Overage charges apply if you exceed your plan's included transaction volume</LegalListItem>
              <LegalListItem>API access fees for premium features such as advanced analytics and custom integrations</LegalListItem>
              <LegalListItem>You will receive monthly invoices detailing all charges, recovered transactions, and commission fees</LegalListItem>
              <LegalListItem>Payment is due within 15 days of invoice date; late payments may result in service suspension</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Payment Terms</LegalSectionTitle>
            <LegalParagraph>
              All products and services offered on this website are sold as a one-time purchase.
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Payments are charged once at the time of purchase</LegalListItem>
              <LegalListItem>No recurring or automatic billing will occur</LegalListItem>
              <LegalListItem>You will not be enrolled in a subscription</LegalListItem>
              <LegalListItem>Payments are processed through secure third-party payment processors</LegalListItem>
              <LegalListItem>All fees are non-refundable except as required by law or stated in our Refund Policy</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Acceptable Use Policy</LegalSectionTitle>
            <LegalParagraph>
              As a merchant using our decline salvage platform, you agree not to use our services for any unlawful or prohibited purpose. Prohibited activities include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Violating any applicable payment processing laws, PCI-DSS requirements, or consumer protection regulations</LegalListItem>
              <LegalListItem>Transmitting malicious code, viruses, or harmful software through API integrations</LegalListItem>
              <LegalListItem>Attempting to gain unauthorized access to other merchants' data, our systems, or platform infrastructure</LegalListItem>
              <LegalListItem>Interfering with or disrupting platform performance, rate limits, or service availability for other merchants</LegalListItem>
              <LegalListItem>Using our platform to process high-risk transactions, prohibited goods, or fraudulent business activities</LegalListItem>
              <LegalListItem>Misrepresenting your business, impersonating other merchants, or providing false merchant information</LegalListItem>
              <LegalListItem>Scraping, harvesting, or collecting data from the platform beyond your authorized customer data</LegalListItem>
              <LegalListItem>Reverse engineering, decompiling, or attempting to extract source code from our platform or APIs</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Intellectual Property Rights</LegalSectionTitle>
            <LegalParagraph>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
              software, and trademarks, are owned by {process.env.REACT_APP_COMPANY_NAME} or our licensors and are protected 
              by copyright, trademark, and other intellectual property laws.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You are granted a limited, non-exclusive, non-transferable license to access and use our services for their 
              intended purpose. You may not:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Copy, modify, or create derivative works of our services or content</LegalListItem>
              <LegalListItem>Reverse engineer, decompile, or disassemble our software</LegalListItem>
              <LegalListItem>Remove or alter any copyright, trademark, or proprietary notices</LegalListItem>
              <LegalListItem>Use our services or content for commercial purposes without authorization</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Privacy and Security</LegalSectionTitle>
            <LegalParagraph>
              We are committed to protecting your privacy and the security of your data. Our collection, use, and disclosure 
              of personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              By using our services, you acknowledge and agree that we may collect, process, and store your data as described 
              in our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Availability and Modifications</LegalSectionTitle>
            <LegalParagraph>
              We strive to maintain 99.9% uptime for our decline salvage platform but do not guarantee uninterrupted or error-free operation. 
              We reserve the right to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Modify, update, or add platform features, API endpoints, and dashboard functionality at any time</LegalListItem>
              <LegalListItem>Perform scheduled maintenance with 48 hours' advance notice for major updates</LegalListItem>
              <LegalListItem>Implement emergency maintenance or security patches with minimal notice when required</LegalListItem>
              <LegalListItem>Update these Merchant Terms with 30 days' notice for material changes affecting pricing or functionality</LegalListItem>
              <LegalListItem>Deprecate API versions with 90 days' advance notice and migration documentation</LegalListItem>
              <LegalListItem>Adjust rate limits, transaction volumes, and tier pricing with reasonable notice to merchants</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Continued use of our platform after any modifications constitutes acceptance of the revised Terms. Major changes will be communicated via email and dashboard notifications.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, {process.env.REACT_APP_COMPANY_NAME} and its officers, directors, 
              employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including but not limited to loss of revenue, lost transactions, data loss, business interruption, or loss of goodwill, resulting from:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your merchant account access, API integration, or inability to use our platform services</LegalListItem>
              <LegalListItem>Failed transaction recovery attempts, payment processor declines, or customer payment failures</LegalListItem>
              <LegalListItem>Unauthorized access, security breaches, or API key compromises affecting your merchant account</LegalListItem>
              <LegalListItem>Third-party integrations, payment gateways, or external service provider failures</LegalListItem>
              <LegalListItem>Platform downtime, API errors, or service interruptions beyond our reasonable control</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claims arising from or related to these Terms or our platform services shall not exceed 
              the total service fees you paid to us in the twelve (12) months preceding the claim, or $10,000, whichever is less.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Indemnification</LegalSectionTitle>
            <LegalParagraph>
              You agree to defend, indemnify, and hold harmless {process.env.REACT_APP_COMPANY_NAME} and its affiliates, 
              officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, 
              losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your access to or use of our services</LegalListItem>
              <LegalListItem>Your violation of these Terms</LegalListItem>
              <LegalListItem>Your violation of any third-party rights, including intellectual property or privacy rights</LegalListItem>
              <LegalListItem>Any content or information you submit or transmit through our services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution and Governing Law</LegalSectionTitle>
            <LegalParagraph>
              These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, 
              United States, without regard to its conflict of law provisions.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Any disputes arising from or relating to these Terms or our services shall be resolved through binding 
              arbitration in accordance with the rules of the American Arbitration Association, except that either party 
              may seek injunctive or equitable relief in a court of competent jurisdiction.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination</LegalSectionTitle>
            <LegalParagraph>
              Either party may terminate this agreement at any time:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>You may cancel your account through your account settings or by contacting support</LegalListItem>
              <LegalListItem>We may terminate or suspend your account immediately for violation of these Terms</LegalListItem>
              <LegalListItem>We may terminate your account with 30 days' notice for any reason</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Upon termination, your right to use our services will immediately cease. Provisions that by their nature 
              should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about these Terms, please contact us:
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

export default TermsPage;