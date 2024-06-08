import React from 'react';
import Header from './Header';

const App2 = () => {
  return (
    <>
    <Header />
    <div className="wrapper">
      <div className="menubar">
        <div className="logo-details">
          <span className="logo_name">
            <a href="index2.html" style={{ textDecoration: 'none', color: 'white' }}>
              Course Registration
            </a>
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <div className="iocn-link">
              <a href="#">
                <span className="link_name">Engineering</span>
                <i className="bx bxs-chevron-down arrow"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#" className="filter-link" data-category="category1">
                    B. Tech. Computer Science
                  </a>
                </li>
                {/* Add similar items for other engineering categories */}
              </ul>
            </div>
          </li>
          {/* Add similar items for Business / Management, Biotechnology, etc. */}
        </ul>
      </div>
      <div className="Ruby_logo imeg">
        <img src="/images/logo1(1).png" alt="Ruby university logo" />
      </div>
      <section className="container">
        <div className="card category1">
          <div className="course-image c1"></div>
          <h2>CSE</h2>
          <p>
            The department offers B.Tech in Computer Science and Engineering. Regular interaction with software companies has helped the department in maintaining its syllabus abreast with technology and industrial standards. The rigorous learning environment has helped make students job-ready.
            <br />
            +91 8372####
          </p>
          <a href="form.html">REGISTER</a>
        </div>
        {/* Add similar course cards for other categories */}
      </section>
    </div></>
  );
};

export default App2;
