import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "../Pages/Home"
import Individuals from "../Pages/Individuals";
import Enterprises from "../Pages/Enterprises";
import Teams from "../Pages/Teams";
import "../App.css"
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="container-fluid ">
          <div className="row">
          <div className="col-md-12">

            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark ">
              <a className="navbar-brand  main-nav" href="#" > <Link to="/"><Logo /></Link></a>
        <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#"><Link to="/individuals">Individuals</Link><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><Link to="/teams">Teams</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <Link to="/enterprises">Enterprises</Link></a>
                      </li>
                  </ul>
                </div>
              </nav>
    </div>
      </div>
    </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individuals" element={<Individuals />} />
            <Route path="/enterprises" element={<Enterprises />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default Navbar