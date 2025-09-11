import React from "react";

function AboutPage() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <section className="bg-success bg-opacity-10 text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Meet Our <span className="text-success">Internship Team</span>
          </h1>
          <p
            className="lead text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Dedicated to excellence in internship management and student
            success. Our collaborative approach ensures every student receives
            the guidance and support they need to thrive in their professional
            journey.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Team Members</h2>
            <p className="text-muted">
              Passionate individuals working together to create exceptional
              internship experiences
            </p>
          </div>

          <div className="row g-4 mb-5">
            {/* Manish */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  {/* Profile Image */}
                  <img
                    src="media\images\manish1.jpg" // replace with Manish's LinkedIn profile image
                    alt="Manish"
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <h4 className="fw-bold">Manish</h4>
                  <p className="text-success fw-semibold">
                    Internship Coordinator
                  </p>
                  <p className="text-muted">
                    Backend Developer responsible for building and maintaining scalable systems. 
        Leading the project with a focus on secure APIs, efficient database design, 
        and smooth integration across all modules.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-success bg-opacity-10 text-success me-2">
                      Placement Strategy
                    </span>
                    <span className="badge bg-success bg-opacity-10 text-success me-2">
                      Industry Relations
                    </span>
                    <span className="badge bg-success bg-opacity-10 text-success">
                      Student Mentoring
                    </span>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
                    <a
                      href="mailto:manish@example.com"
                      className="btn btn-outline-success btn-sm"
                    >
                      <i className="fas fa-envelope me-2"></i> Contact
                    </a>
                    <a
                      href="https://www.linkedin.com/in/manish-kumar-singh-474b04329/" // LinkedIn link
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success btn-sm"
                    >
                      <i className="fab fa-linkedin me-2"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mansi */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  {/* Profile Image */}
                  <img
                    src="https://via.placeholder.com/100" // replace with Mansi's LinkedIn profile image
                    alt="Mansi"
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <h4 className="fw-bold">Mansi</h4>
                  <p className="text-primary fw-semibold">
                    Documentation Specialist
                  </p>
                  <p className="text-muted">
                   Frontend Developer skilled in crafting modern, responsive, and user-friendly
        interfaces. Passionate about bringing designs to life and ensuring seamless
        user experiences across all platforms.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                      Verification
                    </span>
                    <span className="badge bg-primary bg-opacity-10 text-primary me-2">
                      Optimization
                    </span>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      Quality
                    </span>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
                    <a
                      href="mailto:mansi@example.com"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fas fa-envelope me-2"></i> Contact
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mansi" // LinkedIn link
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fab fa-linkedin me-2"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor */}
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Mentor</h2>
            <p className="text-muted">
              Guiding our team with expertise and academic excellence
            </p>
          </div>

          <div
            className="card shadow-lg border-0 mx-auto mb-5"
            style={{ maxWidth: "800px" }}
          >
            <div className="card-body text-center">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/120" // replace with Mentor's LinkedIn profile image
                alt="Dr. Ankit Verma"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h4 className="fw-bold">Dr. Ankit Verma</h4>
              <p className="text-success fw-semibold">
                Faculty Mentor & Academic Supervisor
              </p>
              <p className="text-muted">
                With extensive experience in academic research and industry
                collaboration, he provides strategic guidance to ensure our
                program maintains academic integrity while fostering strong
                industry ties.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a
                  href="https://www.linkedin.com/in/drankitverma" // LinkedIn link
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  <i className="fab fa-linkedin me-2"></i> LinkedIn
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary"
                >
                  <i className="fas fa-award me-2"></i> Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
