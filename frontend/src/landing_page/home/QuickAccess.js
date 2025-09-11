import React from "react";

function QuickAccess() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold text-dark mb-3">Quick Access</h2>
          <p className="lead text-muted">
            Access your most important tasks quickly
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="row g-4 mb-5">
          {/* Recent Uploads */}
          <div className="col-md-6">
            <div className="bg-light rounded-3 p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-warning bg-opacity-25 rounded-circle me-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  {/* Bootstrap Icon */}
                  <i className="bi bi-clock text-warning fs-5"></i>
                </div>
                <div>
                  <h3 className="h6 fw-semibold text-dark mb-1">
                    Recent Uploads
                  </h3>
                  <p className="text-muted small mb-0">
                    View your latest document submissions
                  </p>
                </div>
                <div className="ms-auto">
                  <span className="badge rounded-pill bg-warning text-dark">
                    2 New
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* My Certificates */}
          <div className="col-md-6">
            <div className="bg-light rounded-3 p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary bg-opacity-25 rounded-circle me-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  {/* Bootstrap Icon */}
                  <i className="bi bi-award text-primary fs-5"></i>
                </div>
                <div>
                  <h3 className="h6 fw-semibold text-dark mb-1">
                    My Certificates
                  </h3>
                  <p className="text-muted small mb-0">
                    Access all your verified documents
                  </p>
                </div>
                <div className="ms-auto">
                  <span className="badge rounded-pill bg-primary">
                    5 Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Students & Teachers */}
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold text-dark mb-3">
            Built for Students and Teachers
          </h2>
          <p className="lead text-muted mb-1">
            Tailored experiences for seamless document
          </p>
          <p className="lead text-muted">
            management and academic oversight
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;
