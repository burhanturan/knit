import Image from "next/image";
import '../globals.css';

import Header from "@/component/common/Header";

// CONSTANTS
const fFamilyPage = "Arial, Helvetica, sans-serif";
const bgColorPage = "#FAF8E5";
const fColorPage = "#18474D";
const bgColorFrame = "#012634";
const fColorFrame = "#DDE9D3";
const fColorFrameHeader = "#D8F0F4";
const bgColorFrameButton = "#D8F0F4";
const fColorFrameButton = "#012634";

// STYLES
const styleMain = {
  backgroundColor: bgColorPage,
  color: fColorPage,
  fontFamily: fFamilyPage,
  marginBottom: "0px",
}

const styleMainDiv = {
  backgroundColor: bgColorPage,
  marginBottom: "0px",
}

const styleFrame = {
  backgroundColor: bgColorFrame,
  color: fColorFrame,
};

const styleFrameHeader = {
  color: fColorFrameHeader,
  display: "inline-flex",
  width: "90%",
  justifyContent: "center",
  fontSize: "1.25em",
  fontWeight: "bold",
};

const styleFrameButton = {
  backgroundColor: bgColorFrameButton,
  color: fColorFrameButton,
  minWidth: "200px",
  marginTop: "5px",
};

const styleHeaderSix = {
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "15px"
};

const stylePageTwo = {
  fontSize:'1.25em',
  fontWeight: 'bold',
  marginBottom: '20px'
};

export default function YourChallenges() {
  return (
    <main
      className=""
      style={{ ...styleMain }}
    >
      <div
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center "
        style={{ ...styleMainDiv }}
      >
        <Header />
      </div>

      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                className="img-fluid shadow"
                width={610}
                height={550}
                src="/yourchallengesImg.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h4 style={{fontSize:'1.25em'}} className="fw-bold"> ELEVATING BUSINESS INTO THE DIGITAL FUTURE </h4>
              <h1 className="fw-bold">Who we serve</h1>
              <h5 className="fw-bold mb-3">We overcome your biggest challenges</h5>
              <p>
                At Knit Software, we serve forward-thinking businesses ready to
                embrace the transformative power of digital innovation. From
                local startups to established enterprises, our mission is to
                help you navigate the complexities of the digital world. Whether
                you&apos;re looking to refresh your online presence, transition
                from traditional to digital markets, or streamline intricate
                processes, we&apos;re here to elevate your business to new
                digital heights. Our clients are partners in progress, each with
                unique challenges, bound by a common goal - to thrive in a
                connected world.
              </p>
              <h6 style={{...styleHeaderSix}}>STALE DIGITAL PRESENCE</h6>
              <p>
                <strong>Revitalize Your Online Identity</strong>
                <br></br>
                In the digital age, an outdated website isn&apos;t just a
                nuisance; it&apos;s a barrier to growth. You&apos;re seeking
                more than a facelift; you need a platform that simplifies
                customer interaction and slashes operational costs. We at Knit
                Software understand that. Our approach boosts your digital
                presence, enhancing user experience and streamlining backend
                processes. Expect to see a significant uptick in customer
                engagement and a reduction in expenses, driving your margins to
                new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="container cta w-100"
        style={{ ...styleFrame }}
      >
        <div data-aos="zoom-in">
          <div className="text-center">
            <div>
              <p style={{ ...styleFrameHeader }}>
                Empowerment Through Innovation: Discover Our Approach
              </p>
            </div>

            <div>
            <a href="/ourapproach">
                <button
                  style={{ ...styleFrameButton }}
                  className="btn rounded-0 cta-btn"
                >
                  See how we make it happen
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-2 order-lg-1"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <Image
                className="img-fluid shadow"
                width={610}
                height={550}
                src="/yourchallengesSecondImg.png"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content"
              data-aos="fade-right"
            >
              <h1 style={{...stylePageTwo}} >
                ANALOG TO DIGITAL LEAP
              </h1>
              <h4 style={{fontSize:'1.125em'}} className="fw-bold">
                Bridging the Digital Divide
              </h4>
              <p style={{fontSize:'1.25em'}} >
                Transitioning from a traditional analog business to a digital
                powerhouse can seem daunting. How do you extend your reach and
                tap into new markets? Knit Software specializes in demystifying
                this transformation. We help you leverage the digital landscape
                to connect with a broader audience and scale effectively. With
                our solutions, anticipate a surge in client acquisition and a
                scalable model poised for expansion.
              </p>
              <h4 style={{...stylePageTwo, marginTop: "45px" }}>
                PROCESS OPTIMIZATION
              </h4>
              <h5 className="fw-bold">Streamlining for Efficiency</h5>
              <p style={{fontSize:'1.125em'}} >
                Our suite of products embodies our ethos of agility and
                user-centric design. From sleek, intuitive web applications to
                comprehensive digital solutions for small businesses, we tailor
                technology to fit your needs. Our goal? To transform your
                digital landscape, making technology work for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
