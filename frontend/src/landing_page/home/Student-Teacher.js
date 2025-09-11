import React from "react";

function StudentTeacher() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row g-5 mb-5">
          
          {/* Students */}
          <div className="col-md-6 text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-4"
              style={{ width: "96px", height: "96px" }}
            >
              {/* Bootstrap Icon */}
              <i className="bi bi-people fs-1 text-primary"></i>
            </div>
            <h3 className="h4 fw-bold text-dark mb-3">Students</h3>
            <p className="text-muted">
              Upload your internship offer letters and certificates securely. Track document status,
              receive notifications, and maintain a complete record of your internship achievements.
            </p>
          </div>

          {/* Teachers */}
          <div className="col-md-6 text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-warning bg-opacity-25 rounded-circle mx-auto mb-4"
              style={{ width: "96px", height: "96px" }}
            >
              {/* Bootstrap Icon */}
              <i className="bi bi-mortarboard fs-1 text-warning"></i>
            </div>
            <h3 className="h4 fw-bold text-dark mb-3">Teachers</h3>
            <p className="text-muted">
              Review and verify student documents, monitor internship progress, and generate
              comprehensive reports. Access powerful analytics to track program effectiveness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StudentTeacher;
