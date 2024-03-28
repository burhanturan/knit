import Image from "next/image";
import Link from "next/link";

const styleFirstSection = {
  backgroundColor: "#18474D",
  height: "200px",
};

const styleSecondSection = {
  color: "#DDE9D3",
  fontFamily: "Arial",
  display: "inline-flex",
  height: "100px",
  width: "600px",
  justifyContent: "center",
  marginTop: "-100px",
  fontSize: "20px",
  marginLeft: "330px",
};

const styleButton = {
  backgroundColor: "#dde9d3",
  color: "#18474D",
  // marginBottom: "55px",
  minWidth: "200px",
  //marginRight: "200px",

  marginTop: "50px",
};

export default function Home() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#D8F0F4",
      }}
    >
      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#18474D" }}
      >
        <div style={{ maxWidth: "630px" }}>
          <h4>CONNECTING COMMUNITIES, BUILDING DREAMS</h4>
          <h1>Let&apos;s Knit the Future!</h1>
          <h5>Join Us in Weaving a Future Where Technology Unites Us All</h5>
          <p>
            At Knit Software, we&apos;re more than just a tech company;
            we&apos;re a community builder. With every line of code, we stitch
            together stronger connections, fostering an environment where
            businesses and communities thrive hand-in-hand.
          </p>
          <p>
            Our mission is to empower underrepresented groups in the tech space,
            bring innovative solutions to the forefront, and help your business
            tap into the heart of diverse communities. From creating dynamic web
            applications to transforming ideas into digital fantasies,
            we&apos;re dedicated to making technology accessible and impactful
            for all.
          </p>
          <p>
            Let&apos;s knit the future together, creating spaces where every
            voice is heard, and every dream can take shape. Get in touch with us
            today, and let&apos;s start crafting a world of endless
            possibilities, one digital thread at a time.
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
            GET IN TOUCH
          </Link>
        </div>
        <div className="shadow" style={{ maxWidth: "600px" }}>
          <Image width={610} height={550} src="/homepageImg.png" alt="" />
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
                className="mb-5 text-center align-items-center justify-content-center"
                style={{ ...styleSecondSection }}
              >
                Software means investing smartly in technology that drives real,
                impactful changes.
              </span>
            </div>

            <div
              className=" col d-flex"
              style={{ marginTop: "50px", marginLeft: "-420px" }}
            >
              <button
                className="btn rounded-0 align-items-center justify-content-center"
                style={{ ...styleButton }}
              >
                Learn more about what we do
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="  container mt-5 d-flex justify-content-between"
        style={{ color: "#18474D" }}
      >
        <div className="shadow" style={{ maxWidth: "600px" }}>
          <Image className="shadow" width={610} height={550} src="/homepageSecondImg.png" alt="" />
        </div>

        <div style={{ maxWidth: "630px" }}>
          <h4>MAKE YOUR BUSINESS FUTURE-READY</h4>
          <h1>Digitize to Thrive</h1>
          <h5>Join Us in Weaving a Future Where Technology Unites Us All</h5>
          <p>
            In today's rapidly evolving digital landscape, the importance of
            embracing technology cannot be overstated. A single digital product
            holds the potential not just to innovate but to redefine industry
            standards, making digital integration no longer optional but
            essential for survival and success. For companies looking to
            navigate this shift, Knit Software emerges as a critical ally. We
            understand that investing in IT is not just about adopting new
            technologies; it's about strategically integrating digital solutions
            that resonate with your core business values and objectives. At Knit
            Software, we specialize in crafting bespoke digital products that
            not only meet the immediate needs of your business but also lay a
            robust foundation for future innovation. In a time when digital
            transformation can dictate the performance and longevity of your
            organization, partnering with Knit objectives.
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
            OUR SOLUTION
          </Link>
        </div>
      </div>
    </main>
  );
}
