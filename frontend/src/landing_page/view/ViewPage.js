// src/landing_page/view/ViewPage.js
import React, { useEffect, useState } from "react";
import api from "../../api";

function ViewPage() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/internship/all"); // GET /api/internship/all
        if (res.data?.success) {
          setInternships(res.data.internships || []);
        } else {
          setError("Failed to load internships");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching internships");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading internships...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // Group internships by course
  const groupedByCourse = internships.reduce((groups, it) => {
    const course = it.course || "Other";
    if (!groups[course]) {
      groups[course] = [];
    }
    groups[course].push(it);
    return groups;
  }, {});

  return (
    <div
      className="container-fluid p-0"
      style={{ backgroundColor: "#f8fff8" }} // Light background color
    >
      {/* Page Header */}
      <div
        className="text-center py-5"
        style={{ backgroundColor: "#d4edda" }}
      >
        <h1 className="fw-bold mb-3 text-success">All Internship Submissions</h1>
        <p className="text-muted fs-5">
          Browse internships grouped by course.
        </p>
        <h5 className="fw-bold text-dark">
          Total Students: {internships.length}
        </h5>
      </div>

      <div className="container py-5">
        {Object.keys(groupedByCourse).length === 0 ? (
          <p className="text-center text-muted">No internships found.</p>
        ) : (
          Object.keys(groupedByCourse).map((course) => (
            <div key={course} className="mb-5">
              {/* Course Heading */}
              <h3 className="fw-bold text-primary mb-4">
                {course} ({groupedByCourse[course].length} Students)
              </h3>
              <div className="row gy-4">
                {groupedByCourse[course].map((it) => (
                  <div key={it._id} className="col-12">
                    <div className="card shadow-sm border-0 rounded-3">
                      <div className="row g-0">
                        {/* Left Side Image */}
                        <div className="col-md-3">
                          <img
                            src={
                              it.offerLetterUrl ||
                              "https://via.placeholder.com/300x200?text=No+Image"
                            }
                            alt={it.companyName + " offer"}
                            className="img-fluid rounded-start h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>

                        {/* Right Side Details */}
                        <div className="col-md-9">
                          <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">
                              {it.name}{" "}
                              <small className="text-muted">({it.course})</small>
                            </h5>

                            {/* Info */}
                            <div className="mb-2">
                              <span className="badge bg-secondary me-2">
                                {it.year}
                              </span>
                              <span
                                className={`badge me-2 ${
                                  it.internshipType === "Online"
                                    ? "bg-info"
                                    : "bg-success"
                                }`}
                              >
                                {it.internshipType}
                              </span>
                              {it.salary ? (
                                <span className="badge bg-warning text-dark">
                                  Paid: {it.salary}
                                </span>
                              ) : (
                                <span className="badge bg-light text-dark">
                                  Unpaid
                                </span>
                              )}
                            </div>

                            <p className="mb-1">
                              <strong>Company:</strong> {it.companyName}
                            </p>
                            <p className="mb-1">
                              <strong>Role/Position:</strong> {it.role}
                            </p>
                            <p className="mb-1">
                              <strong>Location:</strong> {it.location}
                            </p>
                            <p className="mb-1">
                              <strong>Duration:</strong> {it.duration}
                            </p>
                            <p className="mt-2">
                              <strong>Feedback:</strong>{" "}
                              {it.feedback || <em>No feedback provided</em>}
                            </p>

                            {/* Footer Info */}
                            <p className="mb-0 text-muted small">
                              Uploaded by: {it.user?.email || "Unknown"} •{" "}
                              {new Date(it.createdAt).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                            </p>

                            {/* Actions */}
                            <div className="mt-3">
                              {it.offerLetterUrl && (
                                <>
                                  <a
                                    href={it.offerLetterUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm btn-outline-primary me-2"
                                  >
                                    View Offer Letter
                                  </a>
                                  <a
                                    href={it.offerLetterUrl}
                                    download
                                    className="btn btn-sm btn-outline-success"
                                  >
                                    Download
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewPage;
