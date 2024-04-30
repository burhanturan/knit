import Image from "next/image";
import Link from "next/link";

import Header from "@/component/common/Header";

const styleSecondSection = {
  color: "#DDE9D3",
  fontFamily: "Arial",
  display: "inline-flex",
  width: "90%",
  justifyContent: "center",
  fontSize: "20px",
};

const styleButton = {
  backgroundColor: "#dde9d3",
  color: "#18474D",
  minWidth: "200px",
  marginTop: "50px",
};

const style1 = {
  fontSize: "18px",
};

export default function Home() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#F0F6EA",
        marginBottom: "0px",
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center "
        style={{ backgroundColor: "#F0F6EA" }}
      >
        <Header style={{ backgroundColor: "#F0F6EA" }} />
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
                src="/ourapproachImg.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h4 className="fw-bold" style={style1}>
                CRAFTING EXCELLENCE THROUGH COLLABORATION AND AGILITY
              </h4>
              <h1 className="fw-bold">Our Secret Sauce</h1>
              <h5 className="fw-bold">Unleashing Potential, Together</h5>
              <p>
                At Knit Software, our approach is what sets us apart --
                it&apos;s our &apos;secret sauce.&apos; We blend industry best
                practices with a unique flavor of collaboration to deliver
                impactful solutions swiftly and efficiently. Our secret lies in
                our commitment to a user-centric methodology and the agile scrum
                framework, ensuring that every project is a tight-knit endeavor
                for success.
              </p>
              <h5 className="fw-bold">Empowered Teams, Empowered Solutions</h5>
              <p>
                Our teams are the weavers of innovation, bringing diverse skills
                and unified vision to the crafting table. We believe in the
                strength of collaboration, not just within our walls but
                extending to our clients. By forging strong bonds, we ensure
                that our journey towards solution creation is one of shared
                goals and mutual triumphs.
              </p>

              <Link
                href="/yourchallenges"
                className="btn rounded-0"
                style={{
                  backgroundColor: "#18474D",
                  color: "#DDE9D3",
                  minWidth: "200px",
                  marginTop: "60px",
                }}
              >
                WHO WE SERVE
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
                Unravel the Potential - Connect the Dots to Hidden Opportunities
                with Us.
              </p>
            </div>

            <div>
              <button
                style={{ ...styleButton }}
                className="btn rounded-0 cta-btn"
              >
                Discover Connected Solutions
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
                src="/ourapproachSecondImg.png"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content"
              data-aos="fade-right"
            >
              <h4>Driven by Users, Loved by Communities</h4>
              <p>
                Our end-users are the heart of our development process. We
                listen, we learn, and we deliver solutions that not only meet
                their needs but go beyond to delight and empower. With each line
                of code and each user story, we stitch together an experience
                that resonates and endures.
              </p>
              <h4>The Agile Advantage</h4>
              <p>
                Scrum is our compass in the ever-changing landscape of
                technology. This framework empowers us to navigate projects with
                flexibility, iterate with precision, and deliver with
                accelerated momentum. It&apos;s about being responsive to change
                and proactive in innovation - that&apos;s the Knit Software
                standard.
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
                THE DIFFERENCE WE MAKE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
