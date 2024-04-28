import Image from "next/image";
import Link from "next/link";

import { Button } from "react-bootstrap";
import Header from "@/component/common/Header";

const styleFirstSection = {
  backgroundColor: "#18474D",
  height: "200px",
};

const styleSecondSection = {
  color: "#DDE9D3",
  fontFamily: "Arial",
  display: "inline-flex",
  //height: "50px",
  width: "600px",
  justifyContent: "center",
  //marginTop: "-100px",
  fontSize: "20px",
  //marginLeft: "330px",
};

const styleButton = {
  backgroundColor: "#dde9d3",
  color: "#18474D",
  minWidth: "200px",
};

const styleh1 = {
  fontSize: "16px"
};



export default function Home() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#D8F0F4",
        marginBottom: "0px",
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center "
        style={{ backgroundColor: "#D8F0F4" }}
      >
        <Header style={{ backgroundColor: "#D8F0F4" }} />
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
              <h4 className="fw-bold" style={styleh1}>CONNECTING COMMUNITIES, BUILDING DREAMS</h4>
              <h1 className="fw-bold mb-4" style={{ fontSize: '44px' }}>Let&apos;s Knit the Future!</h1>
              <p className="fw-bold" style={{ fontSize: '16.5px' }}>Join Us in Weaving a Future Where Technology Unites Us All</p>
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
                style={{
                  backgroundColor: "#18474D",
                  color: "#DDE9D3",
                  minWidth: "200px",
                  marginTop: "60px",
                }}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="container cta w-100"
        style={{ backgroundColor: "#18474D" }}
      >
        <div data-aos="zoom-in">
          <div className="text-center">
            <div>
              <p style={{ ...styleSecondSection }}>
                Software means investing smartly in technology 
                <br />
                that drives real, impactful changes.
              </p>
            </div>

            <div>
  <a href="/whatwedo">
    <button
      style={{ ...styleButton }}
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
              <h4 className="fw-bold" style={{ fontSize: '17.5px' }}>MAKE YOUR BUSINESS FUTURE-READY</h4>
              <h1 className="fw-bold mb-4" style={{fontSize: '46px'}}>Digitize to Thrive</h1>
              <h5 className="fw-bold mb-4" style={{fontSize: "17px"}}>
                Join Us in Weaving a Future Where Technology Unites Us All
              </h5>
              <p>
                In today&apos;s rapidly evolving digital landscape, the importance of
                embracing technology cannot be overstated. A single digital
                product holds the potential not just to innovate but to redefine
                industry standards, making digital integration no longer
                optional but essential for survival and success. For companies
                looking to navigate this shift, Knit Software emerges as a
                critical ally. We understand that investing in IT is not just
                about adopting new technologies; it&apos;s about strategically
                integrating digital solutions that resonate with your core
                business values and objectives. At Knit Software, we specialize
                in crafting bespoke digital products that not only meet the
                immediate needs of your business but also lay a robust
                foundation for future innovation. In a time when digital
                transformation can dictate the performance and longevity of your
                organization, partnering with Knit&apos;s objectives.
              </p>
              <Link
                href="/whatwedo"
                className="btn rounded-0"
                style={{
                  backgroundColor: "#18474D",
                  color: "#DDE9D3",
                  minWidth: "200px",
                  marginTop: "60px",
                }}
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
