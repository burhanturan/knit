import Header from "@/component/common/Header";

const privacyheading = {
    fontWeight: "bold",
  };

export default function PrivacyPolicy() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#ffffff",
        marginBottom: "100px",
        color: "#18474D",
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky justify-content-left align-items-left"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Header style={{ backgroundColor: "#ffffff" }} />
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
              className=" pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              style={{ textAlign: "left" }} 
            >
              <h1 className="fw-bold mb-3 text-center">Privacy Policy</h1> 
              <p style={{ margin: "0 auto", maxWidth: "900px" }}> 
                At Knit Software, we deeply value your privacy and are committed
                to protecting your personal data with integrity and
                transparency. Our policies are designed to be straightforward,
                ensuring you understand how we handle your information.
                Here&apos;s what you need to know:
              </p>
            

            <ol class="list-group list-group-light list-group-numbered mt-4" style={{ maxWidth: "900px", margin: "0 auto", paddingLeft: "0", fontSize: "90%" }}>
             <li class="list-group-item">
             <span style={privacyheading}>We Respect Your Privacy:</span> Your personal data is treated with the utmost care and respect.
            </li>
            <li class="list-group-item">
            <span style={privacyheading}>Collect What We Need:</span> We only gather essential information like your IP address and details you share with us (e.g., via CV submission).
            </li>
            <li class="list-group-item">
            <span style={privacyheading}>Using Your Data:</span>  We use your information to provide a personalized experience and communicate effectively.
            </li>   
            <li class="list-group-item">
            <span style={privacyheading}>Sharing Data:</span> Only our trusted service providers have access to your data, and it&apos;s solely for enhancing our services.
            </li>  
            <li class="list-group-item">
            <span style={privacyheading}>Storing Data Safely:</span> We keep your data secure for up to 5 years, aligning with our commitment to data protection.

            </li>  
            <li class="list-group-item">
            <span style={privacyheading}>Your Rights, Your Control:</span> You&apos;re always in control. For any requests regarding your data, just shoot us an email.
            </li>  
            <li class="list-group-item">
            <span style={privacyheading}>We're Here for You:</span>  Questions? Concerns? Reach out at info@knitsoftware.com.
            </li>  
            </ol>

            <section>
            <ol class="list-group list-group-light mt-5">
            <li class="list-group-item">
            <div class="row">
            <div class="col-md-1 text-end">
              1.
             </div>
      <div class="col-md-11">
        <div class="fw-bold">Introduction</div>
        Welcome to Knit Software! We&apos;
        re all about creating connections and ensuring our community members feel valued and respected. This Privacy Policy reflects our dedication to safeguarding your personal information while keeping everything as simple and transparent as possible.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        2.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Information We Collect</div>
        We collect the bare minimum to make our services work for you:
        1. IP Addresses: To personalize your experience by setting the website language.
        2. Personal Data: Including but not limited to your name, email, and CV details when you choose to share them with us.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        3.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">How We Use Your Information</div>
        Your information helps us tailor our services to better suit your needs and preferences. It also enables us to communicate with you more effectively, whether for service updates or potential opportunities.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        4.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Sharing Your Information</div>
        We only share your data with service providers that help us enhance our services. These providers are carefully chosen and bound by our privacy standards to ensure your information remains protected.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        5.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">International Data Transfers</div>
        We have no plans to transfer data internationally. Your data will be stored and processed in Canada, maintaining its security and privacy.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        6.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Your Rights and Choices</div>
        You have the right to inquire about, update, or delete your personal information at any time. Simply email us at info@knitsoftware.com, and we&apos;ll assist you promptly.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        7.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Data Retention</div>
        We retain your personal data for up to 5 years or as dictated by legal requirements and best practices. Our goal is to only keep your data as long as necessary.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        8.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Security Measures</div>
        We employ robust security measures, including encryption and access controls, to protect your data from unauthorized access and ensure its integrity.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        9.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Changes to Our Privacy Policy</div>
        Should we update our Privacy Policy, we’ll inform you through our website or direct communication, keeping you in the loop.
      </div>
    </div>
  </li>
  <li class="list-group-item">
    <div class="row">
      <div class="col-md-1 text-end">
        10.
      </div>
      <div class="col-md-11">
        <div class="fw-bold">Contact Us</div>
        For any questions or concerns about your privacy and data protection, don’t hesitate to contact our support team at info@knitsoftware.com. We’re here to help and ensure your experience with Knit Software is secure, transparent, and positive.
      </div>
    </div>
  </li>
</ol>
</section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
