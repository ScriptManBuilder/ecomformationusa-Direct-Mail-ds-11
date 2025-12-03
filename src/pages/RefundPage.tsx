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

const RefundPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Merchant Service Fee Refund Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Our Commitment to Merchant Satisfaction</LegalSectionTitle>
            <LegalParagraph>
              At {process.env.REACT_APP_COMPANY_NAME}, we are committed to delivering value through our decline salvage platform. 
              This Refund Policy outlines the circumstances under which refunds may be issued for subscription fees, commission charges, 
              and other platform service fees.
            </LegalParagraph>
            <LegalParagraph>
              By subscribing to our merchant services, you acknowledge that you have read and understood this Refund Policy and agree to be bound by its terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>General Merchant Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              For subscription fees and platform charges, the following refund terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Subscription Cancellation:</strong> You may cancel your subscription at any time, effective at the end of your current billing period. 
                No refunds are provided for partial months or unused subscription time.
              </LegalListItem>
              <LegalListItem>
                <strong>Setup Fees:</strong> One-time setup and onboarding fees are non-refundable once integration has commenced.
              </LegalListItem>
              <LegalListItem>
                <strong>Commission Charges:</strong> Success-based commission fees on recovered transactions are final and non-refundable.
              </LegalListItem>
              <LegalListItem>
                <strong>Trial Period:</strong> If you cancel within your 14-day trial period (if applicable), you will not be charged, 
                and no refund is necessary.
              </LegalListItem>
              <LegalListItem>
                <strong>Downgrade Requests:</strong> Plan downgrades take effect at the next billing cycle; no prorated refunds for the current period.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Eligible Refund Scenarios for Merchants</LegalSectionTitle>
            <LegalParagraph>
              Refunds may be considered in the following merchant service circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Platform Downtime:</strong> If our platform experiences extended downtime (&gt;24 hours) due to our fault, 
                you may be eligible for a prorated credit for the affected period.
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Errors:</strong> If you were charged incorrectly due to a system error or duplicate billing, 
                we will refund the incorrect amount immediately upon verification.
              </LegalListItem>
              <LegalListItem>
                <strong>Duplicate Charges:</strong> If you were accidentally charged twice for the same subscription period or service fee, 
                we will refund the duplicate charge within 5 business days.
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Charges:</strong> If you can demonstrate that charges were made without your authorization or 
                after subscription cancellation, we will investigate and issue a refund if warranted.
              </LegalListItem>
              <LegalListItem>
                <strong>Service Not as Described:</strong> If our platform fails to deliver core features or functionality as described 
                in our service agreement, you may be eligible for a refund within 30 days of integration.
              </LegalListItem>
              <LegalListItem>
                <strong>Overage Billing Errors:</strong> If you were incorrectly charged for transaction volume overages due to our metering error, 
                we will refund the incorrect overage charges.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Non-Refundable Service Fees</LegalSectionTitle>
            <LegalParagraph>
              The following merchant service fees are not eligible for refunds under any circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Success-based commission fees on transactions we successfully recovered for you</LegalListItem>
              <LegalListItem>API access fees and integration setup costs once your account has been activated</LegalListItem>
              <LegalListItem>Subscription fees for completed billing periods (partial month refunds are not provided)</LegalListItem>
              <LegalListItem>Custom development, white-label services, or enterprise features that have been delivered</LegalListItem>
              <LegalListItem>Transaction processing fees charged by third-party payment processors (Stripe, PayPal, etc.)</LegalListItem>
              <LegalListItem>Overage charges for transaction volume that exceeded your plan limits (unless due to our billing error)</LegalListItem>
              <LegalListItem>Premium support packages, training sessions, or consulting services that have been rendered</LegalListItem>
              <LegalListItem>Historical data exports, API usage beyond plan limits, or other à la carte services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Request a Refund</LegalSectionTitle>
            <LegalParagraph>
              To request a refund, please follow these steps:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Support:</strong> Email us at {process.env.REACT_APP_EMAIL_SUPPORT} or call 
                {process.env.REACT_APP_PHONE_DISPLAY} with your refund request
              </LegalListItem>
              <LegalListItem>
                <strong>Provide Information:</strong> Include your account email, transaction ID or invoice number, 
                reason for refund request, and any supporting documentation
              </LegalListItem>
              <LegalListItem>
                <strong>Review Process:</strong> Our team will review your request within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Decision Notification:</strong> You will receive an email with our decision and next steps
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Processing:</strong> If approved, refunds are processed within 10-14 business days to 
                your original payment method
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Processing Time</LegalSectionTitle>
            <LegalParagraph>
              Once a refund is approved:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit/Debit Cards:</strong> 5-10 business days (may vary by bank)</LegalListItem>
              <LegalListItem><strong>PayPal:</strong> 3-5 business days</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> 7-14 business days</LegalListItem>
              <LegalListItem><strong>Other Payment Methods:</strong> Up to 14 business days</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Processing times may be longer depending on your financial institution. We are not responsible for delays 
              caused by banks or payment processors.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Store Credits</LegalSectionTitle>
            <LegalParagraph>
              In some cases, we may offer store credits as an alternative to refunds:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Store credits can be applied to future purchases</LegalListItem>
              <LegalListItem>Credits are valid for 12 months from the date of issuance</LegalListItem>
              <LegalListItem>Credits are non-transferable and cannot be redeemed for cash</LegalListItem>
              <LegalListItem>Unused credits expire and cannot be refunded</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Chargebacks and Disputes</LegalSectionTitle>
            <LegalParagraph>
              If you initiate a chargeback or payment dispute with your bank or payment provider:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>We encourage you to contact us first to resolve the issue directly</LegalListItem>
              <LegalListItem>Chargebacks may result in immediate suspension or termination of your account</LegalListItem>
              <LegalListItem>We reserve the right to dispute illegitimate chargebacks</LegalListItem>
              <LegalListItem>You may be liable for chargeback fees and legal costs if the chargeback is found to be fraudulent</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Subscription Cancellation Policy</LegalSectionTitle>
            <LegalParagraph>
              Merchants may cancel their platform subscription under the following terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Subscriptions can be cancelled at any time from your merchant dashboard or by contacting support</LegalListItem>
              <LegalListItem>Cancellation takes effect at the end of your current billing period (no mid-cycle cancellations)</LegalListItem>
              <LegalListItem>To cancel your subscription, submit a request through your account settings or email merchant support</LegalListItem>
              <LegalListItem>Final invoice and commission charges will be processed within 5-10 business days after cancellation</LegalListItem>
              <LegalListItem>You will receive a cancellation confirmation email with your final billing summary</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Force Majeure</LegalSectionTitle>
            <LegalParagraph>
              We are not liable for refunds or service disruptions caused by circumstances beyond our reasonable control, including:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Natural disasters, pandemics, or acts of God</LegalListItem>
              <LegalListItem>Government actions, regulations, or restrictions</LegalListItem>
              <LegalListItem>Internet service provider failures or network outages</LegalListItem>
              <LegalListItem>Third-party service disruptions (payment gateways, hosting providers)</LegalListItem>
              <LegalListItem>Cyberattacks, security breaches, or malicious activities by third parties</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Policy</LegalSectionTitle>
            <LegalParagraph>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services after any changes constitutes acceptance of the 
              updated policy. Material changes will be communicated via email to registered users.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For refund requests or questions about this policy, please contact:
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

export default RefundPage;
