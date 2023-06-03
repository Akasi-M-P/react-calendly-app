/* eslint-disable react/no-unescaped-entities */

import "../App.css";

const Enterprises = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-10 offset-md-1 ent-hero">
          <div>
            <p className="hero-txt">
              Way more than a <br /> scheduling link
            </p>
            <p>Display a variety of meeting choices</p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-dark">
                Sign Up for free
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row ent-visa">
          <div className="col-md-12">
            <img
              src="images/enterprise-sp.png"
              width="100%"
              height="200"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="container-div row">
        <div className="col-md-10 offset-md-1">
          <div className="d-flex justify-content-around">
            <div className="card" style={{ width: "18rem" }}>
              <h5 className="card-title" style={{ color: "blue" }}>
                Sales
              </h5>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/6XhXLUUDzyb5pKX6P6wFuh/7ea18251f98716dcb7530b3aa799b002/Calendly-Sales-Small.png?w=1142&h=960&q=50&fm=webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <h5 className="card-title" style={{ color: "blue" }}>
                Customer Success
              </h5>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/6XhXLUUDzyb5pKX6P6wFuh/7ea18251f98716dcb7530b3aa799b002/Calendly-Sales-Small.png?w=1142&h=960&q=50&fm=webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <h5 className="card-title" style={{ color: "blue" }}>
                Recruiting
              </h5>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/6XhXLUUDzyb5pKX6P6wFuh/7ea18251f98716dcb7530b3aa799b002/Calendly-Sales-Small.png?w=1142&h=960&q=50&fm=webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text" style={{ color: "black" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row learn-more">
          <div className="col-md-10 offset-md-1">
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-dark">
                Dark
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-1 r-row">
            <div className="row">
              <div className="col-md-3">
                <p className="ft-head">
                  Easy <br />
                  <span className="ft-head" style={{ color: "blue" }}>
                    ahead
                  </span>
                </p>
                <p>About Calendly</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <p className="ft">About</p>
                <p>About Calendly</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
              <div className="col-md-3">
                <p className="ft">Solutions</p>
                <p>About Calendly</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
              <div className="col-md-3">
                <p className="ft">Popular features</p>
                <p>About Calendly</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprises;
