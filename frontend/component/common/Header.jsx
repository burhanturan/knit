import Link from "next/link";

const styleHeader = {
  color: "#18474D",
  fontSize: "60px",
  fontFamily: "Fredoka One",
  marginBottom: "0px",
};

const styleButton = {
  backgroundColor: "#18474D",
  color: "#DDE9D3",
  marginBottom: "45px",
  minWidth: "200px",
};

const styleEnglish = {
float: "right",
margin: "10px",
};

export default function Header() {
  return (

    <header style={{ height: "150px" }} id="header" className=" container fixed-top position-sticky">
    <div  className=" d-flex align-items-center justify-content-between">
      <h1 className="logo">        <Link
          // style={{ ...stylesWholeHeader }}
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
                marginTop: "10",
                fontFamily: "Fredoka One",
              }}
            >
              <b>software</b>
            </span>
          </div>
        </Link></h1>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link " href="/yourchallenges">YOUR CHALLENGES</a></li>
          <li><a className="nav-link scrollto" href="/whatwedo">WHAT WE DO</a></li>
          <li><a className="nav-link scrollto" href="/ourapproach">OUR APPROACH</a></li>
          <div className="row d-flex gap-2 flex-column" style={{ marginTop: "-40px"}}>
          <li><a className="scrollto justify-content-center" style={{...styleEnglish}} href="#about">English</a></li>
          <li><a className="getstarted justify-content-center scrollto rounded-0" style={{...styleButton}} href="#about">LET'S TALK</a></li>
          </div>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  );
}
