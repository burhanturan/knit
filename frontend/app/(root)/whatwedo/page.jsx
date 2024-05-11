import Image from "next/image";
import Link from "next/link";
import '../globals.css';

import Header from "@/component/common/Header";

// CONSTANTS
const fFamilyPage = "Arial, Helvetica, sans-serif";
const bgColorPage = "#EEE8E8";
const fColorPage = "#18474D";
const bgColorFrame = "#012634";
const fColorFrame = "#DDE9D3";
const fColorFrameHeader = "#D8F0F4";
const bgColorButton = "#18474D";
const fColorButton = "#18474D";
const bgColorFrameButton = "#D8F0F4";

// STYLES
const styleMainDiv = {
  backgroundColor: bgColorPage,
}

const styleMain = {
  backgroundColor: bgColorPage,
  color: fColorPage,
  fontFamily: fFamilyPage,
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
  fontSize: "20px",
};

const styleFrameButton = {
  backgroundColor: bgColorFrameButton,
  color: fColorButton,
  minWidth: "200px",
  marginTop: "50px",
};

const styleButton = {
  backgroundColor: bgColorButton,
  color: bgColorFrameButton,
  marginTop: "60px",
};

export default function Home() {
  return (
    <main style={{ ...styleMain }} >
      <div 
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center " 
        style={{ ...styleMainDiv }}
      >
        <Header  />
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
                src="/whatwedoImg.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h4>EMPOWERING COMMUNITIES THROUGH DIGITAL INNOVATION</h4>
              <h1>What we do at Knit Software</h1>
              <h5>We are all about making an impact</h5>
              <p>
                At Knit Software, we&apos;re more than just a technology
                company; we&apos;re a catalyst for positive change. Our
                dedication to integrating digital solutions into the fabric of
                communities drives us forward. Here&apos;s a glimpse into our
                core:
              </p>
              <br></br>
              <h2>OUR VALUES</h2>
              <p>
                <span className="fw-bold fs-20" >Integrity</span>
                <br></br>
                We believe in the power of honesty, building trust with every click.
              </p>
              <p>
                <span className="fw-bold fs-20" >Community</span>
                <br></br>
                Our heart lies in creating strong bonds, knitting together diverse groups for a unified purpose.
              </p>
              <p>
                <span className="fw-bold fs-20" >Scrappiness</span>
                <br></br>
                Innovation through agility; we&apos;re not agraid to tread new paths to find solutions.
              </p>
              <p>
                <span className="fw-bold fs-20" >Ease</span>
                <br></br>
                Making technology accessible and manageable, we simplify the complex, ensuring a seamless experience for all.
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
                src="/whatwedoSecondImg.png"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content"
              data-aos="fade-right"
            >
              <h2>Our Mission</h2>
              <h4 className="fw-bold fs-20" >
                &quot;To weave a digital future where every connection
                counts&quot;
              </h4>
              <p className="fs-18">
                In a world brimming with potential, our mission is to empower
                every individual and business with cutting-edge web solutions.
                From fostering collaboration to driving discovery, we&apos;re
                here to help communities innovate and thrive.
              </p>
              <br></br>
              <h2>Our Products</h2>
              <p className="fs-18">
                Our suite of products embodies our ethos of agility and
                user-centric design. From sleek, intuitive web applications to
                comprehensive digital solutions for small businesses, we tailor
                technology to fit your needs. Our goal? To transform your
                digital landscape, making technology work for you.
              </p>
              <Link
                href="/yourchallenges"
                className="btn rounded-0"
                style={{ ...styleButton }}
              >
                WHAT WE SOLVE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
