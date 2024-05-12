import Image from "next/image";
import Link from "next/link";
import './globals.css';

import Header from "@/component/common/Header";

// CONSTANTS
const fFamilyPage = "Arial, Helvetica, sans-serif";
const bgColorPage = "#D8F0F4";
const fColorPage = "#18474D";
const bgColorFrame = "#18474D";
const fColorFrame = "#DDE9D3";
const fColorFrameHeader = "#DDE9D3";
const bgColorButton = "#18474D";
const fColorButton = "#DDE9D3";
const bgColorFrameButton = "#DDE9D3";
const fColorFrameButton = "#18474D";

// STYLES
const styleMain = {
  backgroundColor: bgColorPage,
  color: fColorPage,
  fontFamily: fFamilyPage,
  marginBottom: "0px",
}

const styleMainDiv = {
  backgroundColor: bgColorPage,
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

  color: "#DDE9D3",
};

const styleFrameButton = {
  backgroundColor: bgColorFrameButton,
  color: fColorFrameButton,
  minWidth: "200px",
};

const styleButton = {
  backgroundColor: bgColorButton,
  color: fColorButton,
  minWidth: "200px",
  marginTop: "60px",
};



export default function Home() {
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
                src="/homepageImg.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h4 className="fw-bold fs-16" >
                CONNECTING COMMUNITIES, BUILDING DREAMS
              </h4>
              <h1 className="fw-bold mb-4 fs-44" >
                Let&apos;s Knit the Future!
              </h1>
              <p className="fw-bold fs-18" >
                Join Us in Weaving a Future Where Technology Unites Us All
              </p>
              <p>
                At Knit Software, we&apos;re more than just a tech company;
                we&apos;re a community builder. With every line of code, we
                stitch together stronger connections, fostering an environment
                where businesses and communities thrive hand-in-hand.
              </p>
              <p>
                Our mission is to empower underrepresented groups in the tech
                space, bring innovative solutions to the forefront, and help
                your business tap into the heart of diverse communities. From
                creating dynamic web applications to transforming ideas into
                digital fantasies, we&apos;re dedicated to making technology
                accessible and impactful for all.
              </p>
              <p>
                Let&apos;s knit the future together, creating spaces where every
                voice is heard, and every dream can take shape. Get in touch
                with us today, and let&apos;s start crafting a world of endless
                possibilities, one digital thread at a time.
              </p>
              <Link
                href="/letstalk"
                className="btn rounded-0"
                style={{ ...styleButton }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="container cta"
        style={{ ...styleFrame }}
      >
        <div data-aos="zoom-in">
          <div className="text-center">
            <div>
              <p style={{ ...styleFrameHeader }}>
                Software means investing smartly in technology
                <br />
                that drives real, impactful change
              </p>
            </div>

            <div>
              <a href="/whatwedo">
                <button
                  style={{ ...styleFrameButton }}
                  className="btn rounded-0 cta-btn"
                >
                  Learn more about what we do
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
                src="/homepageSecondImg.png"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content"
              data-aos="fade-right"
            >
              <h4 className="fw-bold fs-18" >
                MAKE YOUR BUSINESS FUTURE-READY
              </h4>
              <h1 className="fw-bold mb-4 fs-44">
                Digitize to Thrive
              </h1>
              <h5 className="fw-bold mb-4 fs-18" >
                Join Us in Weaving a Future Where Technology Unites Us All
              </h5>
              <p>
                In today&apos;s rapidly evolving digital landscape, the
                importance of embracing technology cannot be overstated. A
                single digital product holds the potential not just to innovate
                but to redefine industry standards, making digital integration
                no longer optional but essential for survival and success. For
                companies looking to navigate this shift, Knit Software emerges
                as a critical ally. We understand that investing in IT is not
                just about adopting new technologies; it&apos;s about
                strategically integrating digital solutions that resonate with
                your core business values and objectives. At Knit Software, we
                specialize in crafting bespoke digital products that not only
                meet the immediate needs of your business but also lay a robust
                foundation for future innovation. In a time when digital
                transformation can dictate the performance and longevity of your
                organization, partnering with Knit&apos;s objectives.
              </p>
              <Link
                href="/whatwedo"
                className="btn rounded-0"
                style={{ ...styleButton }}
              >
                OUR SOLUTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
