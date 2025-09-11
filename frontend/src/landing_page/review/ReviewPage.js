"use client"

import { useEffect, useState } from "react"
import api from "../../api"

function ReviewPage() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        const res = await api.get("/internship/all")
        if (res.data?.success) {
          const data = (res.data.internships || []).map((it) => ({
            id: it._id,
            name: it.name,
            companyName: it.companyName,
            feedback: it.feedback,
          }))
          setReviews(data)
        } else {
          setError("Failed to load reviews")
        }
      } catch (err) {
        console.error(err)
        setError("Error fetching reviews")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const generateAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)

    const colors = ["bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger", "bg-secondary", "bg-dark"]

    const colorIndex = name.length % colors.length
    return { initials, colorClass: colors[colorIndex] }
  }

  if (loading) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="text-center text-white">
          <div className="spinner-border text-light mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="fw-light">Loading Reviews...</h4>
          <p className="opacity-75">Please wait while we fetch the latest feedback</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center p-5">
                  <i className="fas fa-exclamation-triangle text-danger mb-3" style={{ fontSize: "3rem" }}></i>
                  <h4 className="text-danger mb-3">Oops! Something went wrong</h4>
                  <p className="text-muted mb-4">{error}</p>
                  <button className="btn btn-primary" onClick={() => window.location.reload()}>
                    <i className="fas fa-redo me-2"></i>Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center text-center text-white mb-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <i className="fas fa-star-half-alt" style={{ fontSize: "4rem", opacity: 0.8 }}></i>
              </div>
              <h1
                className="display-4 fw-bold mb-4"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Student Reviews & Experiences
              </h1>
              <p className="lead mb-4" style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                Discover authentic feedback from students about their internship journeys
              </p>
              <div className="row text-center mt-5">
                <div className="col-md-4">
                  <div className="mb-3">
                    <i className="fas fa-users" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h4 className="fw-bold">{reviews.length}+</h4>
                  <p className="opacity-75">Student Reviews</p>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <i className="fas fa-building" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h4 className="fw-bold">{new Set(reviews.map((r) => r.companyName)).size}+</h4>
                  <p className="opacity-75">Companies</p>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <i className="fas fa-chart-line" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h4 className="fw-bold">98%</h4>
                  <p className="opacity-75">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        {reviews.length === 0 ? (
          <div className="text-center py-5">
            <div className="card border-0 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
              <div className="card-body p-5">
                <i className="fas fa-comments text-muted mb-3" style={{ fontSize: "3rem" }}></i>
                <h4 className="text-muted mb-3">No Reviews Yet</h4>
                <p className="text-muted">Be the first to share your internship experience!</p>
                <button className="btn btn-primary">
                  <i className="fas fa-plus me-2"></i>Add Review
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row gy-4">
            {reviews.map((rev) => {
              const avatar = generateAvatar(rev.name)
              return (
                <div key={rev.id} className="col-md-6 col-lg-4">
                  <div
                    className="card border-0 shadow-lg h-100"
                    style={{
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)"
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3 ${avatar.colorClass}`}
                          style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}
                        >
                          {avatar.initials}
                        </div>
                        <div>
                          <h5 className="card-title mb-1 fw-bold">{rev.name}</h5>
                          <div className="d-flex align-items-center text-muted">
                            <i className="fas fa-building me-2"></i>
                            <small>{rev.companyName}</small>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fas fa-star text-warning me-1"></i>
                        ))}
                        <span className="text-muted ms-2">(5.0)</span>
                      </div>

                      <div className="mb-3">
                        <i className="fas fa-quote-left text-primary mb-2"></i>
                        <p className="card-text" style={{ lineHeight: "1.6" }}>
                          {rev.feedback ? rev.feedback : <em className="text-muted">No feedback provided yet</em>}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <small className="text-muted">
                          <i className="fas fa-clock me-1"></i>2 days ago
                        </small>
                        <div>
                          <button className="btn btn-outline-primary btn-sm me-2">
                            <i className="fas fa-thumbs-up me-1"></i>Helpful
                          </button>
                          <button className="btn btn-outline-secondary btn-sm">
                            <i className="fas fa-share me-1"></i>Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewPage
