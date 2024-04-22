import Image from "next/image"
import Link from "next/link"
import Header from "@/component/common/Header"

const styleFirstSection = {
  backgroundColor: "#012634",
  heigth: "200px",
}

const styleSecondSection = {
  color: "#D8F0F4",
  fontFamily: "Arial",
  display: "inline-flex",
  height: "175px",
  width: "600px",
  justifyContent: "center",
  marginTop: "-10px",
  fontSize: "20px",
  marginLeft: "330px",
  
}

const styleButton = {
  backgroundColor: "#D8F0F4",
  color: "#012634",
  marginBottom: "10px",
  minWidth: "300px",
  //marginRight: "200px",

  marginTop: "50px",
}

const styleH4 = {
  fontSize: "19px",
}

const style2 = {
  fontSize: "20px",
}

export default function YourChallenges() {
  return (
    <div
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#FAF8E5",
      }}
    >
      <Header backgroundColor="#abcdef" />
      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#012634" }}
      >
        <div style={{ maxWidth: "630px" }}>
          <h4 style={styleH4}>ELEVATING BUSINESS INTO THE DIGITAL FUTURE</h4>
          <h1 className="fw-bold">Who we serve</h1>
          <h5 className="fw-bold">We overcome your biggest challenges</h5>
          <p>
            At Knit Software, we serve forward-thinking businesses ready to
            embrace the transformative power of digital innovation. From local
            startups to established enterprises, our mission is to help you
            navigate the complexities of the digital world. Whether you&apos;re
            looking to refresh your online presence, transition from traditional
            to digital markets, or streamline intricate processes, we're here to
            elevate your business to new digital heights. Our clients are
            partners in progress, each with unique challenges, bound by a common
            goal - to thrive in a connected world.
          </p>
          <h6 className="fw-bold">STALE DIGITAL PRESENCE</h6>
          <p>
            <strong>Revitalize Your Online Identity</strong>
            <br></br>
            In the digital age, an outdated website isn&apos;t just a nuisance;
            it&apos;s a barrier to growth. You&apos;re seeking more than a
            facelift; you need a platform that simplifies customer interaction
            and slashes operational costs. We at Knit Software understand that.
            Our approach boosts your digital presence, enhancing user experience
            and streamlining backend processes. Expect to see a significant
            uptick in customer engagement and a reduction in expenses, driving
            your margins to new heights.
          </p>
        </div>

        <div
          className="yc"
          style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
        >
          <Image
            width={610}
            height={550}
            src="/yourchallengesImg.png"
            alt=""
            style={{
              display: "inline-block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div
            className="col text-center mt-5 d-flex justify-content-center align-items-center"
            style={{ ...styleFirstSection }}
          >
            <div>
              <span
                className="mb-3 text-center align-items-center justify-content-center"
                style={{ ...styleSecondSection }}
              >
                Empowerment Through Innovation: Discover Our Approach
              </span>
            </div>

            <div
              className=" col d-flex"
              style={{ marginTop: "50px", marginLeft: "-420px" }}
              
            >
             <Link href="/ourapproach">
              <button
                className="btn rounded-0 align-items-center justify-content-center"
                style={{ ...styleButton }}
                
              >
                See how we make it happen
          
              </button>
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>

      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#18474D" }}
      >
        <div className="yc" style={{ maxWidth: "600px"}}>
          <Image
            className="yc"
            width={610}
            height={550}
            src="/yourchallengesSecondImg.png"
            alt=""
          />
        </div>
            
        <div style={{ maxWidth: "630px" }}>
          <h1 className="fw-bold" style={style2}>
            ANALOG TO DIGITAL LEAP
          </h1>
          <h4 className="fw-bold" style={{ fontSize: "17px" }}>
            Bridging the Digital Divide
          </h4>
          <p style={{ fontSize: "18px" }}>
            Transitioning from a traditional analog business to a digital
            powerhouse can seem daunting. How do you extend your reach and tap
            into new markets? Knit Software specializes in demystifying this
            transformation. We help you leverage the digital landscape to
            connect with a broader audience and scale effectively. With our
            solutions, anticipate a surge in client acquisition and a scalable
            model poised for expansion.
          </p>
          <h4 className="fw-bold" style={{ ...style2, marginTop: "45px" }}>
            PROCESS OPTIMIZATION
          </h4>
          <h5 className="fw-bold">Streamlining for Efficiency</h5>
          <p style={{ fontSize: "18px" }}>
            Our suite of products embodies our ethos of agility and user-centric
            design. From sleek, intuitive web applications to comprehensive
            digital solutions for small businesses, we tailor technology to fit
            your needs. Our goal? To transform your digital landscape, making
            technology work for you.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <Link
          href="/"
          className="btn rounded-0"
          style={{
            backgroundColor: "#012634",
            color: "#DDE9D3",
            minWidth: "200px",
            margin: "0 auto",
          }}
        >
          LET&apos;S TALK
        </Link>
      </div>
    </div>
  )
}
