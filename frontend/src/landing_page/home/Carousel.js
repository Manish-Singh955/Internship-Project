import React from "react";

function Carousel() {
  // Inline style for all images
  const imageStyle = {
    height: "400px",
    width: "100%",
    objectFit: "cover",
  };

  // Style for caption background
  const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
    padding: "15px 25px",
    borderRadius: "12px",
    fontWeight: "bold",
    color: "#fff",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide shadow-lg rounded"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded">
        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="media\images\Internship2.webp"
            className="d-block w-100"
            alt="Document Upload"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5>📄 Seamless Document Upload</h5>
            <p>Upload internship reports, assignments, and certificates with ease.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="media/images/internship5.jpg"
            className="d-block w-100"
            alt="Certificate Verification"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5>✅ Verified Certificates</h5>
            <p>Access and verify all your internship-related certificates securely.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="media/images/blog-29.png"
            className="d-block w-100"
            alt="Progress Tracking"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block" style={captionStyle}>
            <h5>📊 Progress Tracking</h5>
            <p>Monitor internship tasks, evaluations, and mentor feedback in real time.</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
