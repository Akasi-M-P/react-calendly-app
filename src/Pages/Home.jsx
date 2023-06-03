
import "../App.css";

const Home = () => {
  return (
    <div>
      

      <div className="container-fluid hero-container">
        <div className="row offset-md-1">
          <div className="col-md-5 sched">
            <p>
              Easy Scheduling <span style={{ color: "blue" }}>ahead</span>
            </p>
          </div>
          <div className="col-md-5">
            <img src="/images/easyimg.jpg" alt="" width="700" />
          </div>
        </div>

        <div className="row offset-md-1">
          <div className="col-md-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <p id="acc-c">Create your free account. No credit card required.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row offset-md-1">
          <div className="col-md-10">
            <div className="row offset-md-1 mid-cont">
              <div className="col-md-10 offset-md-1">
                <div className="d-flex justify-content-center text-center">
                  <p id="trusted">
                    Trusted by more than 50,000 of the world’s leading
                    organizations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row offset-md-1 icons">
          <div className="col-md-10">
            <div className="d-flex justify-content-around">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/e576716034690751c9781af8f41a5b3b/EBay_logo.svg"
                alt=""
              />
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/6NiS4DQmcqEUxKkXJVesAP/d356b290fa1f13a2addae7870312fef2/Vector.svg"
                alt=""
              />
              <img
                src="https://images.ctfassets.net/3xf6g0o5qdho/3FN4wQvWLql69upRURGZ9o/a2f28cf53230b462c4c6cf54ad698414/Compass-White.png"
                alt=""
              />
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg"
                alt=""
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2020/08/Dropbox-logo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row footer">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1">
                <p className="rounded-circle text-center ab">1</p>
              </div>
              <div className="col-md-3">
                <p id="foot-title">Create simple rules</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1">
                <p className="rounded-circle text-center ab">2</p>
              </div>
              <div className="col-md-3">
                <p id="foot-title">Share your link</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1">
                <p className="rounded-circle text-center ab">3</p>
              </div>
              <div className="col-md-3">
                <p id="foot-title">Get booked</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
