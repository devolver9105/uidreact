import React from 'react';
import './style1.css';
import './App.css';
// import App2 from'./App2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


// const adm = document.getElementById("btn1");
// const admission = () => {
//   <App2/>
// }
function App() {
  return (
    <div>
      <nav>
        <a href="#">INTERNATIONAL</a>
        <a href="#">ALUMNI</a>
        <a href="#">FACULTY</a>
        <a href="#">SCHOOLS</a>
        <button id="btn1">
          <a href="index2.html" target="_blank"><b>ADMISSIONS</b></a>
          {/* <App2/> */}
        </button>
      </nav>
      <header>
        <div className="links">
          <div id="img">
            <img src="images/logo1(1).png" alt="Logo" style={{ height: '10rem', marginLeft: '10%' }} />
          </div>
          <div className="items">
            <div className="link2">
              <a href="https://www.studyinwales.ac.uk/our-news" target="_blank">NEWS</a>
              <a href="https://www.studyinwales.ac.uk/news/blogs" target="_blank">BLOGS</a>
              <a href="https://www.studyinwales.ac.uk/scholarships">SCHOLARSHIPS</a>
              <a href="#contact" target="_blank">CONTACT</a>
            </div>
            <div id="links3" style={{ marginTop: '0.75rem' }}>
              <a href="index.html" target="_self">Home</a>
              <a href="https://www.ruby.vic.edu.au/about-us/" target="_blank">About</a>
              <div className="dropdown">
                <button className="dropbtn" style={{ marginBottom: '28%', fontSize: '1.25rem', fontWeight: 550, fontFamily: 'Times New Roman, Times, serif' }}>
                  Campus&#9662;
                </button>
                <div className="dropdown-content">
                  <a href="hyd.html" target="_blank">Hyderabad</a>
                  <a href="jaipur.html" target="_blank">Jaipur</a>
                  <a href="mumbai.html" target="_blank">Mumbai</a>
                </div>
              </div>
              <a href="#">Academics</a>
              <a href="#">Faculty</a>
              <a href="#">Research</a>
            </div>
          </div>
        </div>
      </header>

      <div className="banner">
        <h1>LEARN FROM INDIA'S <br />
          <span><mark>TOP RANKED</mark></span> <br />
          UNIVERSITY
        </h1>
        <button id="btn3"><a href="#" target="_blank">SEARCH FOR PROGRAMS</a></button>
      </div>

      <div className="student">
      </div>

      <footer>
        <div className="container1">
          <p>
            <span style={{ color: 'red' }}>Ruby University</span>
            is a multi-campus, multi-disciplinary, research-intensive private deemed university in India. It currently has 16 constituent schools spread across three campuses in Mumbai, Jaipur, Hyderabad with its headquarters in Delhi. It offers a total of 207 undergraduate, postgraduate, integrated-degree, dual-degree, doctoral programs in engineering, medicine, business, sciences, performing arts and culture, health sciences, Ayurveda, commerce, humanities and social sciences, law, arts and literature, media and communication.
          </p>
        </div>

        <div className="box">
          <p style={{ color: 'white' }}>ADMISSION</p>
          <button id="btn2"><a href="#">APPLY NOW!</a></button>
        </div>
        <div className="container2">
          <p id="logo">Ruby University</p>
          <div className="links4">
            <ul>
              <li><a href="index.html" target="_self">Home</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          <img src="images/img3.png" alt="img3" style={{ height: '10vh', marginLeft: '-45%' }} />
          <img src="images/img2.png" alt="img2" style={{ height: '10vh' }} />
          <img src="images/img1.svg" alt="img1" style={{ height: '10vh' }} />

          <div className="contact" id="contact">
            <h3>Contact us</h3>
            <p>Email: administration@ruby.edu</p>
            <p>Phone: 1800 1110 5520</p>
            <p>Fax: +91 (22) 2572 0305</p>
          </div>
          <br />
          <div className="social">
            <a href="https://www.facebook.com/RubyInstitute/" target="_blank" className="fa fa-facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/rubyinstitute/" target="_blank" className="fa fa-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.x.com/sathvik9105/" target="_blank" className="fa fa-twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="fa fa-whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.linkedin.com/company/rubyinstitute" target="_blank" className="fa fa-linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/@rubyinstitute8629" target="_blank" className="fa fa-youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="box2">
          <p>&copy; 2024 Ruby University. All rights reserved.</p>
          <p><a href="#">Feedback</a> | <a href="#">Ragging</a> | <a href="https://maps.google.com/">Sitemap</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
