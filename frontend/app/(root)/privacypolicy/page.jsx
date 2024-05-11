import React from 'react';
import Header from '@/component/common/Header';

const listStyles = {
  listStyle: 'circle',
  fontSize: '90%',
  paddingTop: '7px',
};

const ListItem = ({ number, title, content }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-1 text-end">{number}.</div>
      <div className="col-md-11">
        <div className="fw-bold">{title}</div>
        {content}
      </div>
    </div>
  </li>
);

const InformationList = ({ items, style }) => (
  <div style={style}>
    <ol className="list-group list-group-light">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ol>
  </div>
);

export default function PrivacyPolicy() {
  const privacyPolicyItems = [
    {
      number: 1,
      title: 'We Respect Your Privacy:',
      content: 'Your personal data is treated with the utmost care and respect.',
    },
    {
      number: 2,
      title: 'Collect What We Need:',
      content: 'We only gather essential information like your IP address and details you share with us (e.g., via CV submission).',
    },
    {
      number: 3,
      title: 'Using Your Data:',
      content: 'We use your information to provide a personalized experience and communicate effectively.',
    },
    {
      number: 4,
      title: 'Sharing Data:',
      content: 'Only our trusted service providers have access to your data, and it\'s solely for enhancing our services.',
    },
    {
      number: 5,
      title: 'Storing Data Safely:',
      content: 'We keep your data secure for up to 5 years, aligning with our commitment to data protection.',
    },
    {
      number: 6,
      title: 'Your Rights, Your Control:',
      content: 'You\'re always in control. For any requests regarding your data, just shoot us an email.',
    },
    {
      number: 7,
      title: 'We\'re Here for You:',
      content: 'Questions? Concerns? Reach out at info@knitsoftware.com.',
    },
  ];

  const formalSectionItems = [
    {
      number: 1,
      title: 'Introduction',
      content: (
        <>
          Welcome to Knit Software! We're all about creating connections and ensuring our community members feel valued and respected. This Privacy Policy reflects our dedication to safeguarding your personal information while keeping everything as simple and transparent as possible.
        </>
      ),
    },
    {
      number: 2,
      title: 'Information We Collect',
      content: (
        <>
          We collect the bare minimum to make our services work for you: 
          <ul style={listStyles}>
            <li>IP Addresses: To personalize your experience by setting the website language.</li>
            <li>Personal Data: Including but not limited to your name, email, and CV details when you choose to share them with us.</li>
          </ul>
        </>
      ),
    },
    {
      number: 3,
      title: 'How We Use Your Information',
      content: (
        <>
          Your information helps us tailor our services to better suit your needs and preferences. It also enables us to communicate with you more effectively, whether for service updates or potential opportunities.
        </>
      ),
    },
    {
      number: 4,
      title: 'Sharing Your Information',
      content: (
        <>
          We only share your data with service providers that help us enhance our services. These providers are carefully chosen and bound by our privacy standards to ensure your information remains protected.
        </>
      ),
    },
    {
      number: 5,
      title: 'International Data Transfers',
      content: (
        <>
          We have no plans to transfer data internationally. Your data will be stored and processed in Canada, maintaining its security and privacy.
        </>
      ),
    },
    {
      number: 6,
      title: 'Your Rights and Choices',
      content: (
        <>
          You have the right to inquire about, update, or delete your personal information at any time. Simply email us at info@knitsoftware.com, and we'll assist you promptly.
        </>
      ),
    },
    {
      number: 7,
      title: 'Data Retention',
      content: (
        <>
          We retain your personal data for up to 5 years or as dictated by legal requirements and best practices. Our goal is to only keep your data as long as necessary.
        </>
      ),
    },
    {
      number: 8,
      title: 'Security Measures',
      content: (
        <>
          We employ robust security measures, including encryption and access controls, to protect your data from unauthorized access and ensure its integrity.
        </>
      ),
    },
    {
      number: 9,
      title: 'Changes to Our Privacy Policy',
      content: (
        <>
          Should we update our Privacy Policy, we’ll inform you through our website or direct communication, keeping you in the loop.
        </>
      ),
    },
    {
      number: 10,
      title: 'Contact Us',
      content: (
        <>
          For any questions or concerns about your privacy and data protection, don't hesitate to contact our support team at info@knitsoftware.com. We're here to help and ensure your experience with Knit Software is secure, transparent, and positive.
        </>
      ),
    },
  ];

  return (
    <main
      className=""
      style={{
        fontFamily: 'Arial',
        backgroundColor: '#ffffff',
        marginBottom: '100px',
        color: '#18474D',
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky justify-content-left align-items-left"
        style={{ backgroundColor: '#ffffff' }}
      >
        <Header style={{ backgroundColor: '#ffffff' }} />
      </div>

      <section id="about" className="about">
        <div className="container text-center">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            ></div>
            <div
              className="pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              style={{ textAlign: 'left' }}
            >
              <h1 className="fw-bold mb-3 text-center">Privacy Policy</h1>
              <p style={{ margin: '20px auto', maxWidth: '900px' }}>
                At Knit Software, we deeply value your privacy and are committed to protecting your personal data with integrity and transparency. Our policies are designed to be straightforward, ensuring you understand how we handle your information. Here's what you need to know:
              </p>

            
              {/* Render the Privacy Policy section */}
              <InformationList items={privacyPolicyItems} style={{ maxWidth: "900px", margin: "0 auto", paddingLeft: "0", fontSize: "90%", marginBottom: "85px" }} />

 
              <div style={{ marginTop: '50px' }}>
              <h4 className="fw-bold mt-5 text-center">Formal Section</h4>
              <InformationList items={formalSectionItems} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
