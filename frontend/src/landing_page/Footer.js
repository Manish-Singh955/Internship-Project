import React from 'react';

function Footer() {
    return ( 
     <footer className="border-top py-5" style={{ backgroundColor: "#d4edda" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Description */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center bg-primary text-white rounded me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <span className="fw-bold">IC</span>
              </div>
              <h3 className="h5 fw-semibold text-dark mb-0">InternConnect</h3>
            </div>
            <p className="text-muted small">
              Streamlining internship document management for students and faculty
              through secure, efficient digital solutions.
            </p>
          </div>

          {/* For Students */}
          <div className="col-md-2">
            <h5 className="fw-semibold text-dark mb-3">For Students</h5>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted hover-link">Upload Documents</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Track Status</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Document Guide</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Help Center</a></li>
            </ul>
          </div>

          {/* For Teachers */}
          <div className="col-md-3">
            <h5 className="fw-semibold text-dark mb-3">For Teachers</h5>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted hover-link">Review Dashboard</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Student Progress</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Generate Reports</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Analytics</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h5 className="fw-semibold text-dark mb-3">Support</h5>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted hover-link">Help Center</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-muted hover-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top mt-4 pt-3 text-center">
          <p className="small text-muted mb-0">
            © 2025 InternConnect University Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
     );
}

export default Footer;
