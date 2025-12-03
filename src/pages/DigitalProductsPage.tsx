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

const DigitalProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>SaaS Platform & API Access Terms</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              This SaaS Platform & API Access Terms document governs your business subscription to and use of {process.env.REACT_APP_COMPANY_NAME}'s 
              decline salvage platform, API services, and related software-as-a-service offerings. By integrating with our platform or accessing our API, 
              you agree to the terms outlined in this policy.
            </LegalParagraph>
            <LegalParagraph>
              Our platform services include: web-based merchant dashboard, RESTful API endpoints for transaction recovery, webhook notifications, 
              hosted payment update pages, analytics and reporting tools, and integration documentation.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Services Included</LegalSectionTitle>
            <LegalParagraph>
              Your subscription to our decline salvage platform includes access to the following SaaS services and digital tools:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>RESTful API Access:</strong> Full access to our API endpoints for transaction submission, status updates, and webhook configurations
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Dashboard:</strong> Web-based control panel for viewing analytics, managing settings, and accessing reports
              </LegalListItem>
              <LegalListItem>
                <strong>Hosted Payment Pages:</strong> PCI-compliant, brandable payment update pages for your customers
              </LegalListItem>
              <LegalListItem>
                <strong>Webhook Notifications:</strong> Real-time event notifications for successful recoveries, failed attempts, and system updates
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics & Reporting:</strong> Downloadable reports, visual dashboards, and export tools (CSV, JSON)
              </LegalListItem>
              <LegalListItem>
                <strong>Developer Documentation:</strong> Technical guides, API references, SDK libraries, and integration examples
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Subscription and Billing</LegalSectionTitle>
            <LegalParagraph>
              Platform access is provided on a subscription basis:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Pricing Tiers:</strong> Plans vary by transaction volume, features, and support level as detailed in your merchant agreement
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Methods:</strong> Subscriptions are billed via credit card, ACH transfer, or wire transfer for enterprise clients
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Frequency:</strong> Subscription fees are billed monthly or annually based on your selected plan
              </LegalListItem>
              <LegalListItem>
                <strong>Success-Based Fees:</strong> Commission charges apply to recovered transactions as specified in your pricing tier
              </LegalListItem>
              <LegalListItem>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless you cancel before the end of your billing period
              </LegalListItem>
              <LegalListItem>
                <strong>Invoicing:</strong> Monthly invoices are delivered via email with detailed breakdowns of subscription and commission fees
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Onboarding and Access</LegalSectionTitle>
            <LegalParagraph>
              Access to the platform is provisioned as follows:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Immediate Provisioning:</strong> Merchant accounts are activated immediately upon subscription confirmation
              </LegalListItem>
              <LegalListItem>
                <strong>API Credentials:</strong> API keys, secret tokens, and webhook URLs are delivered via your merchant dashboard
              </LegalListItem>
              <LegalListItem>
                <strong>Dashboard Access:</strong> Login credentials for your merchant control panel are sent to your business email
              </LegalListItem>
              <LegalListItem>
                <strong>Documentation Portal:</strong> Full technical documentation, integration guides, and SDK downloads available upon login
              </LegalListItem>
              <LegalListItem>
                <strong>Onboarding Support:</strong> Dedicated integration assistance available during your first 30 days
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Most merchants complete integration within 1-2 weeks with our technical support
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>License Grant and Usage Restrictions</LegalSectionTitle>
            <LegalParagraph>
              Your subscription grants you a limited, non-exclusive license to use the platform:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Business Use License:</strong> Platform services are licensed for your business operations and merchant activities only
              </LegalListItem>
              <LegalListItem>
                <strong>Non-Transferable:</strong> Your merchant account and API access cannot be shared, transferred, or resold to other businesses
              </LegalListItem>
              <LegalListItem>
                <strong>Usage Limits:</strong> API rate limits, transaction volume caps, and feature access restrictions apply per your plan tier
              </LegalListItem>
              <LegalListItem>
                <strong>Prohibited Uses:</strong> You may not reverse engineer the platform, attempt to extract proprietary algorithms, or circumvent security measures
              </LegalListItem>
              <LegalListItem>
                <strong>Intellectual Property:</strong> All platform code, algorithms, and documentation remain the property of {process.env.REACT_APP_COMPANY_NAME}
              </LegalListItem>
              <LegalListItem>
                <strong>Revocation:</strong> License may be revoked immediately if you violate these terms, engage in fraud, or misuse the platform
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Cancellation and Refunds</LegalSectionTitle>
            <LegalParagraph>
              Subscription cancellation and refund terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>No Refunds on Usage:</strong> Subscription fees for the current billing period are non-refundable once the period has started
              </LegalListItem>
              <LegalListItem>
                <strong>Trial Period:</strong> Cancel within your 14-day trial (if applicable) for a full refund before first billing
              </LegalListItem>
              <LegalListItem>
                <strong>Platform Issues:</strong> Refunds or credits available if platform experiences extended downtime due to our fault
              </LegalListItem>
              <LegalListItem>
                <strong>Cancellation Process:</strong> Cancel your subscription anytime from your dashboard; effective at end of billing cycle
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Requests:</strong> Submit refund requests to {process.env.REACT_APP_EMAIL_SUPPORT} with your merchant account details
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms, please refer to our Merchant Service Fee Refund Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Platform Updates and API Versioning</LegalSectionTitle>
            <LegalParagraph>
              Our platform receives regular updates and improvements:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Free Updates:</strong> Platform enhancements, feature additions, and security patches are included in your subscription
              </LegalListItem>
              <LegalListItem>
                <strong>Automatic Updates:</strong> Dashboard and backend systems update automatically without merchant action required
              </LegalListItem>
              <LegalListItem>
                <strong>API Versioning:</strong> API endpoints use semantic versioning (v1, v2); we maintain backward compatibility for 12 months
              </LegalListItem>
              <LegalListItem>
                <strong>Deprecation Notice:</strong> Advance notice of 90 days minimum provided before deprecating any API endpoint or feature
              </LegalListItem>
              <LegalListItem>
                <strong>Migration Support:</strong> Technical assistance provided for migrating to new API versions during deprecation period
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Availability and Uptime</LegalSectionTitle>
            <LegalParagraph>
              We maintain high availability for merchant platform services:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>API Availability:</strong> We target 99.9% uptime for API endpoints and webhook delivery systems
              </LegalListItem>
              <LegalListItem>
                <strong>Dashboard Access:</strong> Merchant dashboard available 24/7 with scheduled maintenance windows announced in advance
              </LegalListItem>
              <LegalListItem>
                <strong>Maintenance Windows:</strong> Routine maintenance typically scheduled during low-traffic periods (2-4 AM EST)
              </LegalListItem>
              <LegalListItem>
                <strong>Status Monitoring:</strong> Real-time platform status page available at status.{process.env.REACT_APP_APP_SUBDOMAIN}
              </LegalListItem>
              <LegalListItem>
                <strong>Service Modifications:</strong> Platform features may be enhanced or deprecated with reasonable advance notice to merchants
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Technical Support</LegalSectionTitle>
            <LegalParagraph>
              Technical support for platform integration and usage:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Integration Assistance:</strong> Help with API setup, webhook configuration, and initial platform integration
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> Contact merchant support at {process.env.REACT_APP_EMAIL_SUPPORT} for technical assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Response Times:</strong> Standard support responds within 24 hours; priority support within 4 hours for enterprise plans
              </LegalListItem>
              <LegalListItem>
                <strong>Technical Issues:</strong> Assistance with API errors, authentication problems, webhook failures, and platform bugs
              </LegalListItem>
              <LegalListItem>
                <strong>Platform Questions:</strong> Guidance on features, best practices, recovery optimization, and analytics interpretation
              </LegalListItem>
              <LegalListItem>
                <strong>Support Scope:</strong> Technical support covers platform functionality, not merchant-side infrastructure or code debugging
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Merchant Data Ownership and Export</LegalSectionTitle>
            <LegalParagraph>
              Your business data processed through our platform:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Your Data:</strong> You retain full ownership of all merchant data, transaction records, and customer information processed via our platform
              </LegalListItem>
              <LegalListItem>
                <strong>Data Export:</strong> Export your complete data set at any time in standard formats (CSV, JSON, XML) via dashboard or API
              </LegalListItem>
              <LegalListItem>
                <strong>Data Portability:</strong> We provide export tools and migration assistance to help you move to other platforms if needed
              </LegalListItem>
              <LegalListItem>
                <strong>Post-Cancellation:</strong> After subscription cancellation, merchant data is retained for 90 days, then securely deleted per data retention policy
              </LegalListItem>
              <LegalListItem>
                <strong>Anonymized Analytics:</strong> We may retain anonymized, aggregated metrics for platform improvement (no personally identifiable data)
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Account Termination and Suspension</LegalSectionTitle>
            <LegalParagraph>
              Merchant account access may be terminated or suspended under the following conditions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Non-Payment:</strong> Merchant accounts with overdue invoices may be suspended after 15-day grace period
              </LegalListItem>
              <LegalListItem>
                <strong>Terms Violation:</strong> Violation of Merchant Service Agreement or Acceptable Use Policy may result in immediate termination
              </LegalListItem>
              <LegalListItem>
                <strong>Fraudulent Activity:</strong> Suspected fraud, abuse, or unauthorized usage will result in immediate account suspension pending investigation
              </LegalListItem>
              <LegalListItem>
                <strong>Voluntary Cancellation:</strong> Merchants may cancel subscriptions at any time from account settings or by contacting support
              </LegalListItem>
              <LegalListItem>
                <strong>Effect of Termination:</strong> Upon termination, API access is revoked, platform usage ceases, and final invoicing occurs
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Warranty Disclaimer</LegalSectionTitle>
            <LegalParagraph>
              The platform is provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not warrant that our platform will meet your specific business requirements or recovery rate expectations
              </LegalListItem>
              <LegalListItem>
                We do not guarantee that platform services will be uninterrupted, error-free, or completely secure at all times
              </LegalListItem>
              <LegalListItem>
                We do not warrant that recovery results will be consistent across all merchants or transaction types
              </LegalListItem>
              <LegalListItem>
                API integrations and third-party services are used at your own risk; we do not guarantee third-party reliability
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of implied warranties for business services, so some limitations may not apply to your business.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, {process.env.REACT_APP_COMPANY_NAME} shall not be liable for:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Any indirect, incidental, special, consequential, or exemplary damages arising from platform usage</LegalListItem>
              <LegalListItem>Loss of profits, revenue, business opportunities, or anticipated savings due to platform issues</LegalListItem>
              <LegalListItem>Service interruptions, data loss, or failed transaction recovery attempts</LegalListItem>
              <LegalListItem>API errors, webhook failures, or integration bugs affecting your business operations</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claim related to platform services shall not exceed the total subscription fees paid by your business 
              in the 12 months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Merchant Support</LegalSectionTitle>
            <LegalParagraph>
              For questions about platform services, API integration, or this policy, contact:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Merchant Support Team
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

export default DigitalProductsPage;
