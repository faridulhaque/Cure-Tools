import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="">
          <div style={{height: '50vh', backgroundColor: 'white'}}>

</div>
             <div className="footer-top">
        <div className="cure-tool-writing">Cure Tools</div>
        <div className="icon-container">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="footer-bottom bg-secondary">
        <div></div>
        <div>
          <p style={{ color: "white", marginLeft: "40px", marginTop: "10px" }}>
            Contact Us
          </p>
          <div style={{ marginTop: "-8px" }}>
            <small className="contact-text-footer">
              {" "}
              House No: 13, Road No: 7{" "}
            </small>

            <br />
            <small className="contact-text-footer">Email: Cure@tool.co</small>
            <br />
            <small className="contact-text-footer">
              Phone: +911 12345678901
            </small>
          </div>
        </div>
        <small className="copyright">
          ©Cure Tools {new Date().getFullYear()}
        </small>
      </div>
        </div>
    );
};

export default Footer;