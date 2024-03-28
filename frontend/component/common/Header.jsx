import Link from "next/link";
import React from "react";

const styleButton = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
  marginBottom: "55px",
  minWidth: "200px",
};

const styleHeader = {
  color: "#18474D",
  fontSize: "60px",
  fontFamily: "Arial",
  marginBottom: "-25px",
};

const styleTop = {
  color: "#18474D",
  fontSize: "15px",
  fontFamily: "Fredoka One",
  marginBottom: "-90px",
  marginTop: "-25px",
};

const styleEnglish = {
  marginLeft: "350px",
  marginTop: "15px",
};

const stylesWholeHeader = {
  backgroundColor: "#D8F0F4",
};

export default function Header() {
  return (
    <div
      className="sticky-top container justify-content-between align-items-center "
      style={{ ...stylesWholeHeader }}
    >
      <nav className="navbar navbar-expand-lg ">
        <Link
          className="navbar-brand"
          href="/"
        >
          <div className="d-flex align-items-center flex-column mb-0">
            <span
              style={{
                ...styleHeader,
              }}
              className=""
            >
              <b>KNIT</b>
            </span>

            <span
              style={{
                color: "#18474D",
                fontSize: "19px",
                marginTop: "-10",
                fontFamily: "Fredoka One",
              }}
            >
              software
            </span>
          </div>
        </Link>
        <div
          style={{ color: "#18474D", ...styleTop }}
          className="collapse navbar-collapse d-flex justify-content-around "
        >
          <div className="navbar-nav gap-5">
            <Link
              className="nav-item nav-link active"
              href="/"
              style={{ color: "#18474D" }}
            >
              YOUR CHALLENGES
            </Link>
            <Link
              className="nav-item nav-link"
              href="/"
              style={{ color: "#18474D" }}
            >
              WHAT WE DO
            </Link>
            <Link
              className="nav-item nav-link"
              href="/"
              style={{ color: "#18474D" }}
            >
              OUR APPROACH
            </Link>
          </div>

          <div
            style={{ ...styleEnglish }}
            className="d-flex gap-3 d-lg flex-column align-items-end justify-content-end"
          >
            <Link
              href="/"
              className="m-0 p-0 text-end text-decoration-none "
              style={{ color: "#18474D" }}
            >
              English
            </Link>
            <button className="btn rounded-0" style={{ ...styleButton }}>
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
