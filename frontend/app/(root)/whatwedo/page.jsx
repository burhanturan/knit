import Image from "next/image";
import Link from "next/link";

import { Button } from "react-bootstrap";
import Header from "@/component/common/Header";

const styleSecondSection = {
  color: "#DDE9D3",
  fontFamily: "Arial",
  display: "inline-flex",
  //height: "50px",
  width: "%100",
  justifyContent: "center",
  //marginTop: "-100px",
  fontSize: "20px",
  //marginLeft: "330px",
};

const styleButton = {
  backgroundColor: "#dde9d3",
  color: "#18474D",
  // marginBottom: "55px",
  minWidth: "200px",
  //marginRight: "200px",

  marginTop: "50px",
};

const style2 = {
  fontSize: "60px",
}

export default function Home() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#EEE8E8",
        marginBottom: "0px",
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
              <h4>EMPOWERING COMMUNITIES THROUGH DIGITAL INNOVATION</h4>
              <h1>What we do at Knit Software</h1>
              <h5>
                We are all about making an impact
              </h5>
              <p>
              At Knit Software, we&apos;re more than just a technology company;
              we&apos;re a catalyst for positive change. Our dedication to
              integrating digital solutions into the fabric of communities drives
              us forward. Here&apos;s a glimpse into our core:
              </p>
              <h6 className="fw-bold">OUR VALUES</h6>
              <p>
              <strong>Integrity</strong>
            <br></br>
            We believe in the power of honesty, building trust with every click.
          </p>
          <p>
            <strong>Community</strong>
            <br></br>
            Our heart lies in creating strong bonds, knitting together diverse
            groups for a unified purpose.
          </p>
          <p>
            <strong>Scrappiness</strong>
            <br></br>
            Innovation through agility; we&apos;re not agraid to tread new paths
            to find solutions.
          </p>
          <p>
            <strong>Ease</strong>
            <br></br>
            Making technology accessible and manageable, we simplify the
            complex, ensuring a seamless experience for all.
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
              <p style={{ ...styleSecondSection }}>
                Empowerment Through Innovation: Discover Our Approach
              </p>
            </div>

            <div>
              <button
                style={{ ...styleButton }}
                className="btn rounded-0 cta-btn"
              >
                See how we make it happen
              </button>
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
            <h1 style={style2}>Our Mission</h1>
          <h4 className="fw-bold" style={{ fontSize: "20px" }}>
          &quot;To weave a digital future where every connection counts&quot;
          </h4>
          <p style={{ fontSize: "18px" }}>
            In a world brimming with potential, our mission is to empower every
            individual and business with cutting-edge web solutions. From
            fostering collaboration to driving discovery, we&apos;re here to help
            communities innovate and thrive.
          </p>
          <h1 style={{ ...style2, marginTop: "45px" }}>Our Products</h1>
          <p style={{ fontSize: "18px" }}>
            Our suite of products embodies our ethos of agility and user-centric
            design. From sleek, intuitive web applications to comprehensive
            digital solutions for small businesses, we tailor technology to fit
            your needs. Our goal? To transform your digital landscape, making
            technology work for you.
              </p>
              <Link
                href="/"
                className="btn rounded-0"
                style={{
                  backgroundColor: "#18474D",
                  color: "#DDE9D3",
                  minWidth: "200px",
                  marginTop: "60px",
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
