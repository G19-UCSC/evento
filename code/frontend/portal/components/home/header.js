import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

export default function header() {
  return (
    <div>
      <header>
        <>
          <nav className="navbar navbar-expand-lg navbar-primary ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <h2>YIT Platform</h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " onClick={() => window.location.replace("/#about")}>
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Ourvalues
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/initiative">
                      Initiatives
                    </a>
                  </li>
                  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Events
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          <li><a className="dropdown-item" href="/upcomingevent ">Upcoming events</a></li>
                          <li><a className="dropdown-item" href="/pastevent">Past events</a></li>
                        </ul>
                      </li>
                    </ul></div>
                  <li className="nav-item">
                    <a className="nav-link" href="/volunteer">
                      volunteers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Partners
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      SignUp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Signin
                    </a>
                  </li>
                </ul>

              </div>

            </div>
          </nav>
          <br />
          <br />
        </>
      </header>
    </div>
  )
}
