import React from "react";
import { useNavigate } from "react-router-dom";

function DocumentUpload() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Always redirect to login first
    navigate("/login", { state: { redirectTo: "/internship" } });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4">
              Upload Your <span className="text-primary">Internship Documents</span>
            </h1>

            <p className="lead text-muted mb-3">
              Easily upload and manage your internship offer letters and certificates.
            </p>

            <p className="text-muted mb-5">
              Teachers can review and track student progress in one centralized platform.
            </p>

            <div className="card border border-primary bg-white p-5 mb-4">
              <div className="card-body text-center">
                <div className="mb-4">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>

                <h4 className="fw-semibold mb-3">Upload Your Documents</h4>
                <p className="text-muted mb-4">
                  Drag and drop your internship offer letters or certificates here
                </p>

                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={handleButtonClick}
                >
                  Please complete the form
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="row g-4 mt-5">
              <div className="col-6 col-md-3 text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">1,200+</h2>
                <p className="text-muted mb-0">Documents Uploaded</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">450+</h2>
                <p className="text-muted mb-0">Students Registered</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">25+</h2>
                <p className="text-muted mb-0">Faculty Members</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <h2 className="display-5 fw-bold text-primary mb-1">98%</h2>
                <p className="text-muted mb-0">Processing Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentUpload;
