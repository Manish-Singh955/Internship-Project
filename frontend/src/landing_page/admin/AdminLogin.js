"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid"
    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    // Simulate API call delay
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "admin@1234") {
        navigate("/view")
      } else {
        setErrors({ general: "Invalid email or password. Please try again." })
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="position-absolute w-100 h-100 overflow-hidden">
        <div
          className="position-absolute rounded-circle bg-white opacity-10"
          style={{ top: "10%", left: "10%", width: "300px", height: "300px" }}
        ></div>
        <div
          className="position-absolute rounded-circle bg-white opacity-5"
          style={{ bottom: "10%", right: "10%", width: "200px", height: "200px" }}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div
              className="card border-0 shadow-lg position-relative"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >
              <div className="card-header bg-transparent border-0 text-center py-4">
                <div className="mb-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-gradient"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fas fa-user-shield text-white fs-2"></i>
                  </div>
                </div>
                <h2 className="fw-bold text-dark mb-2">Admin Portal</h2>
                <p className="text-muted mb-0">Sign in to access your dashboard</p>
              </div>

              <div className="card-body px-4 pb-4">
                {errors.general && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {errors.general}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <div className="form-floating">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : email ? "is-valid" : ""}`}
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (errors.email) setErrors({ ...errors, email: "" })
                        }}
                        placeholder="Enter admin email"
                        style={{ borderRadius: "12px", padding: "12px 16px" }}
                        required
                      />
                      <label htmlFor="email">
                        <i className="fas fa-envelope me-2"></i>Email Address
                      </label>
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-floating position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${errors.password ? "is-invalid" : password ? "is-valid" : ""}`}
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          if (errors.password) setErrors({ ...errors, password: "" })
                        }}
                        placeholder="Enter admin password"
                        style={{ borderRadius: "12px", padding: "12px 16px", paddingRight: "50px" }}
                        required
                      />
                      <label htmlFor="password">
                        <i className="fas fa-lock me-2"></i>Password
                      </label>
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ zIndex: 5 }}
                      >
                        <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                      </button>
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none text-primary fw-medium">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-bold position-relative"
                    disabled={isLoading}
                    style={{
                      borderRadius: "12px",
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      border: "none",
                      padding: "12px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In to Dashboard
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-4 pt-3 border-top">
                  <small className="text-muted">
                    <i className="fas fa-shield-alt me-1"></i>
                    Secured with enterprise-grade encryption
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
