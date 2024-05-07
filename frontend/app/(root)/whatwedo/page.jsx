import Image from "next/image";
import Link from "next/link";
import Header from "@/component/common/Header";

const styleBanner = {
  color: "#D8F0F4",
  fontFamily: "Arial",
  display: "inline-flex",
  width: "90%",
  justifyContent: "center",
  fontSize: "20px",
};

const styleButton = {
  backgroundColor: "#D8F0F4",
  color: "#18474D",
  minWidth: "260px",
};

const style2 = {
  fontSize: "medium",
  fontWeight: "bold",
};

const style3 = {
  fontSize: "290%",
  fontWeight: "bold",
  marginBottom: "20px",
};

export default function WhatWeDo() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#EEE8E8",
        marginBottom: "0px",
        color: "#18474D"
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center "
        style={{ backgroundColor: "#EEE8E8" }}
      >
        <Header style={{ backgroundColor: "#EEE8E8" }} />
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
              <h4 style={style2}>EMPOWERING COMMUNITIES THROUGH DIGITAL INNOVATION</h4>
              <h1 className="fw-bold mb-3">What we do at Knit Software</h1>
              <h5 className="fw-bold mb-4">We are all about making an impact</h5>
              <p>
                At Knit Software, we&apos;re more than just a technology
                company; we&apos;re a catalyst for positive change. Our
                dedication to integrating digital solutions into the fabric of
                communities drives us forward. Here&apos;s a glimpse into our
                core:
              </p>
              <h6 className="fw-bold mb-3">OUR VALUES</h6>
              <p>
              <span className="fw-bold" style={{ fontSize: "18px" }}>Integrity</span>
                <br></br>
                We believe in the power of honesty, building trust with every click.
              </p>
              <p>
                <span className="fw-bold" style={{ fontSize: "18px" }}>Community</span>
                <br></br>
                Our heart lies in creating strong bonds, knitting together diverse groups for a unified purpose.
              </p>
              <p>
                <span className="fw-bold" style={{ fontSize: "18px" }}>Scrappiness</span>
                <br></br>
                Innovation through agility; we&apos;re not agraid to tread new paths to find solutions.
              </p>
              <p>
                <span className="fw-bold" style={{ fontSize: "18px" }}>Ease</span>
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
        style={{ backgroundColor: "#012634" }}
      >
        <div data-aos="zoom-in">
          <div className="text-center">
            <div>
              <p style={{ ...styleBanner }}>
                Empowerment Through Innovation: Discover Our Approach
              </p>
            </div>

            <div>
              <a href="/ourapproach">
                <button
                  style={{ ...styleButton }}
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
                width={590}
                height={550}
                src="/whatwedoSecondImg.png"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content"
              data-aos="fade-right"
            >
              <h2 style={style3}>Our Mission</h2>
              <h4 className="fw-bold mb-4" style={{ fontSize: "18px" }}>
                &quot;To weave a digital future where every connection counts&quot;
              </h4>
              <p style={{ fontSize: "18px" }}>
                In a world brimming with potential, our mission is to empower
                every individual and business with cutting-edge web solutions.
                From fostering collaboration to driving discovery, we&apos;re
                here to help communities innovate and thrive.
              </p>
              <h2 style={{ ...style3, marginTop: "45px" }}>Our Products</h2>
              <p style={{ fontSize: "18px" }}>
                Our suite of products embodies our ethos of agility and
                user-centric design. From sleek, intuitive web applications to
                comprehensive digital solutions for small businesses, we tailor
                technology to fit your needs. Our goal? To transform your
                digital landscape, making technology work for you.
              </p>
              <Link
                href="/yourchallenges"
                className="btn rounded-0"
                style={{
                  backgroundColor: "#012634",
                  color: "#D8F0F4",
                  minWidth: "200px",
                  marginTop: "20px",
                }}
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
