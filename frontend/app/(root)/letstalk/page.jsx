import Image from "next/image"
import Header from "@/component/common/Header"

const styleButton = {
  backgroundColor: "#0c2543",
  color: "#D8F0F4",
  minWidth: "175px",
  marginBottom: "30px",
  marginTop: "13px",
}

const styleh1 = {
  fontSize: "2em",
}

export default function LetsTalk() {
  return (
    <main
      className=""
      style={{
        fontFamily: "Arial",
        backgroundColor: "#ffffff",
        marginBottom: "0px",
      }}
    >
      <div
        className="sticky-top absolute-top position-sticky  justify-content-between align-items-center "
        style={{ backgroundColor: "#ffffff" }}
      >
        <Header style={{ backgroundColor: "#ffffff" }} />
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
                src="/letstalkImg.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
            >
              <h4 className="fw-bold" style={{ ...styleh1 }}>
                WE WOULD LOVE TO CONNECT
              </h4>
              <h1 className="fw-bold mb-4" style={{ fontSize: "2.75em" }}>
                Let&apos;s talk!
              </h1>
              <p className="fw-bold" style={{ fontSize: "1.03125em" }}>
                Bringing ideas to life
              </p>
              <p>
                At Knit Software, the next big thing could be your thing.
                We&apos;re in the business of <br />
                turning bright ideas into brilliant realities. Whether
                you&apos;re breaking new ground or breaking out of the box,
                we&apos;re here to help you navigate the digital landscape.
                <br /> Drop us a line, and let&apos;s start a conversation that
                could change the course of <br /> your project.
              </p>
              <div>
                <button
                  style={{ ...styleButton }}
                  className="btn rounded-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseContact"
                >
                  CONTACT US
                </button>

                <div className="collapse mb-4" id="collapseContact">
                  <form className="needs-validation">
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                        placeholder="Firstname"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your firstname.
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                        placeholder="Lastname"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your lastname.
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form4Example2"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example3">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="form4Example3"
                        rows="4"
                        required
                        placeholder="Enter your message"
                      ></textarea>
                      <div className="invalid-feedback">
                        Please enter your message.
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark text-white mx-3 rounded-0"
                        style={{ width: "110px", height: "40px" }}
                      >
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <p className="fw-bold" style={{ fontSize: "1.03125em" }}>
                Join Our Tapestry of Talent
              </p>
              <p>
                We&apos;re not just building software; we&apos;re crafting a
                community of forward-thinkers <br /> and go-getters. Knit
                Software is on the lookout for fresh talent ready to dive into{" "}
                <br /> the tech world. If you&apos;re brimming with enthusiasm
                and a scrappy spirit, eager to <br /> learn and grow within a
                team that values innovation and camaraderie, we want <br /> to
                hear from you.
              </p>
              <div>
                <button
                  style={{ ...styleButton }}
                  className="btn rounded-0 cta-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseResume"
                >
                  SEND US YOUR RESUME
                </button>

                <div className="collapse" id="collapseResume">
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                        placeholder="Firstname"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your firstname.
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                        placeholder="Lastname"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your lastname.
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form4Example2"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example3">
                        Upload Your Resume
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        id="customFile"
                      />
                    </div>

                    <div className="d-flex justify-content-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-dark w-30 mx-3 rounded-0"
                        style={{ width: "110px", height: "40px" }}
                      >
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
