
import "../App.css";

const Individuals = () => {
  return (
    <div className="container-fluid hero-container">
      <div className="row offset-md-1">
        <div className="col-md-5 sched">
          <p>
            The genius way to work <span style={{ color: "blue" }}>better</span>
          </p>
          <p>
            Calendly makes it easy to work smarter when you’re working solo.
            Meetings, sessions, and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <br />
          <button type="button" className="btn btn-dark">
            Sign Up for free
          </button>
        </div>
        <div className="col-md-5">
          <img src="images/Individuals-Hero.jpg" alt="" width="700" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1 r-row">
          <div className="row offset-md-1">
            <div className="col-md-5">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/5vhSCmOfTG8ByGSTZiggcw/7c024b62e0421989e268bee66315ae2c/Calendly-Stay-in-Context.png?w=1140&h=940&q=50&fm=webp"
                alt=""
                width="500"
              />
            </div>
            <div className="col-md-5">
              <br />
              <br />
              <br />
              <h3>Book up efficiently</h3>
              <p>
                When invitees select a meeting slot from your schedule, they
                only see the times you’re available, and only the length and
                type of meeting you want to have. Your schedule fills up
                efficiently, and everyone avoids excess email exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1 r-row">
          <div className="row offset-md-1">
            <div className="col-md-5">
              <br />
              <br />
              <br />
              <h3>Work like you have a personal assistant</h3>
              <p>
                Because Calendly automates administrative tasks like sending
                reminder emails and follow-ups, you can focus on the work that
                builds your business and brings customers back for more.
              </p>
              <button type="button" className="btn btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>{" "}
                Learn more
              </button>
            </div>
            <div className="col-md-5 ">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/4VfIvpAjtQ0KxDLJzcNoGB/3fddd7c61713dcd58723cfe3fc2ba6c2/Calendly-Improve-Attendance.png?w=1140&h=930&q=50&fm=webp"
                alt=""
                width="500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row spread">
        <div className="col-md-10">
          <div className="row offset-md-1">
            <div className="col-md-5">
              <p className="spread-text text-center">
                Find just-right plans for individuals and small teams
              </p>
              <button type="button" className="btn btn-dark">
                See our plans
              </button>
            </div>
            <div className="col-md-7"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1 r-row">
          <div className="row">
            <div className="col-md-3">
              <p className="ft-head">
                Easy
                <br />
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
  );
};

export default Individuals;
