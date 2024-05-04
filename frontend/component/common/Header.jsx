import Link from "next/link";
import React from "react";

import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: "500", subsets: ["latin"] });

const stylesWholeHeader = {
  marginTop: "30px",
};

const styleKnit = {
  color: "#18474D",
  fontSize: "60px",
  fontWeight: " bold, 900",
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
  width: "150px",
  height: "30px",
  // marginBottom: "33px",
  border: "none",
};

const styleToggle = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
  // marginBottom: "33px",
  minWidth: "100px",
  border: "none",
}

const styleEnglish = {
  // float: "right",
  // margin: "10px",
  // marginTop: "15px",
};

export default function Header() {
  return (
    <div
      className="container fixed-top absolute-top position-sticky  "
      style={{ ...stylesWholeHeader }}
    >
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <h1 className="logo">
            <Link className="navbar-brand" href="/">
              <div className="d-flex align-items-center flex-column mb-0">
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

          <button
            className="navbar-toggler"
            style={{ ...styleToggle }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse"
            id="mainMenu"
            style={{ marginTop: "-10px" }}
          >
            <ul className="navbar-nav mx-auto">
              <li>
                <a className="nav-link px-5" href="/yourchallenges">
                  YOUR CHALLENGES
                </a>
              </li>
              <li>
                <a className="nav-link px-5" href="/whatwedo">
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a className="nav-link px-5" href="/ourapproach">
                  OUR APPROACH
                </a>
              </li>
              <li className="nav-item px-5">
                <section className="navbar-end row d-flex gap-2 flex-column" style={{marginTop: "0px"}}>
                  <a
                    className="nav-link justify-content-end hidden-sm-down"
                    style={{ ...styleEnglish }}
                    href="#"
                  >
                    English
                  </a>
                  <a
                    className="nav-link getstarted justify-content-center rounded-0"
                    style={{ ...styleButton }}
                    href="/letstalk"
                  >
                    LET&apos;S TALK
                  </a>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
