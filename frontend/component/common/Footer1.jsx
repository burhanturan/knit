import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { TbSquareLetterX } from "react-icons/tb";

import Link from "next/link";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

const styleKnit = {
  float: "right",
  color: "#ffffff",
  fontSize: "60px",
};

const styleSoftware = {
  color: "#ffffff",
  fontSize: "19px",
  fontFamily: "arial",
  marginTop: "-10px",
};

export default function Footer() {
  return (
    <div className="">
      <footer
        className="text-center text-lg-start text-white"
        style={{ background: "#0c2543" }}
      >
        <section
          className="he d-flex justify-content-between p-4"
          style={{ background: "#0c2543", height: "0px" }}
        ></section>

        <section className="" style={{ marginTop: "-50px" }}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold ">
                  <Link href="/" className="text-white text-decoration-none">
                    KNIT SOFTWARE
                  </Link>
                </h6>
                <p>
                  <a href="/whatwedo" className="text-white text-decoration-none">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/yourchallenges" className="text-white text-decoration-none">
                    Our Clients
                  </a>
                </p>
                <p>
                  <a href="/whatwedo" className="text-white text-decoration-none">
                    Our Products
                  </a>
                </p>
                <p>
                  <a href="/letstalk" className="text-white text-decoration-none">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="/letstalk" className="text-white text-decoration-none">
                    Careers
                  </a>
                </p>
              </div>

              <div
                className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                style={{ paddingLeft: "-45px" }}
              >
                <h6 className=" fw-bold">Usefull Links</h6>

                <p>
                  <a href="#" className="text-white text-decoration-none">
                    Terms of Service
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white text-decoration-none">
                    Cookie Policy
                  </a>
                </p>
              </div>
              <div
                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                style={{ marginTop: "-15px" }}
              >
                <h1 className="logo">
                  <Link className="navbar-brand" href="/">
                    <div className="d-flex align-items-center flex-column">
                      <span
                        style={{
                          ...styleKnit,
                        }}
                        className={fredoka.className}
                      >
                        <strong>KNIT</strong>
                      </span>

                      <span
                        style={{
                          ...styleSoftware,
                        }}
                      >
                        software
                      </span>
                    </div>
                  </Link>
                </h1>

                <div
                  className="col fs-1 gap-3 d-flex justify-content-center align-items-center"
                  style={{ marginTop: "15px" }}
                >
                  <Link href="/" className="text-white">
                    <TbSquareLetterX />
                  </Link>
                  <Link href="/" className="text-white">
                    <TbSquareLetterX />
                  </Link>
                  <Link href="/" className="text-white">
                    <TbSquareLetterX />
                  </Link>
                  <Link href="/" className="text-white">
                    <TbSquareLetterX />
                  </Link>

                  {/* <FaTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                  <FcGoogle /> */}
                </div>
                <p className="d-flex justify-content-center align-items-center">
                  Socials
                </p>
                <div
                  className=" d-flex justify-content-center align-items-center"
                  style={{ marginTop: "15px" }}
                >
                  <Link
                    href="/"
                    className="btn rounded-0"
                    style={{
                      backgroundColor: "#18474D",
                      color: "#DDE9D3",
                      width: "150px",
                      marginTop: "10px",
                    }}
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-start p-3" style={{ backgroundColor: "#0c2543",fontSize:"13px" }}>
          <Link href="/" className="text-white text-decoration-none">
            KnitSoftware.com
          </Link>
          © 2024 All Rights reserved.
        </div>
      </footer>
    </div>
  );
}
