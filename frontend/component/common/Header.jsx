import Link from "next/link";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

const styleKnit = {
  color: "#18474D",
  fontSize: "60px",
  //fontWeight: " bold",
  marginBottom: "-10px",
};

const styleSoftware = {
  color: "#18474D",
  fontSize: "19px",
  marginTop: "10",
};

const styleButton = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
  marginBottom: "33px",
  minWidth: "150px",
};

const styleEnglish = {
  float: "right",
  margin: "10px",
  marginTop: "35px",
};

export default function Header() {
  return (
    <header
      style={{ height: "150px" }}
      id="header"
      className=" container fixed-top position-sticky"
    >
      <div className=" d-flex align-items-center justify-content-between">
        <h1 className="logo">
        <Link className="navbar-brand" href="/">
            <div className="d-flex align-items-center flex-column mb-0">
              <span
                style={{
                  ...styleKnit,
                }}
                className={fredoka.className}
              >
                <b>KNIT</b>
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

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link " href="/yourchallenges">
                YOUR CHALLENGES
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/whatwedo">
                WHAT WE DO
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/ourapproach">
                OUR APPROACH
              </a>
            </li>
            <div
              className="row d-flex gap-2 flex-column"
              style={{ marginTop: "-40px" }}
            >
              <li>
                <a
                  className="scrollto justify-content-center"
                  style={{ ...styleEnglish }}
                  href="#about"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="getstarted justify-content-center scrollto rounded-0"
                  style={{ ...styleButton }}
                  href="#about"
                >
                  LET&apos;S TALK
                </a>
              </li>
            </div>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
