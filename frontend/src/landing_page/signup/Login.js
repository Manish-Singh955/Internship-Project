"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api" // Axios instance (configured with baseURL & withCredentials)

function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setLoading(true)

    try {
      const response = await api.post("/auth/login", form, { withCredentials: true })

      // Save user info in localStorage (you can also store JWT if returned)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      setMessage("✅ Login successful! Redirecting...")
      setTimeout(() => navigate("/internship"), 1200) // redirect to homepage
    } catch (error) {
      const errorMsg = error.response?.data?.message || "❌ Something went wrong. Try again."
      setMessage(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-9">
            <div
              className="card shadow-lg border-0"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <i className="fas fa-user-circle text-primary" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h2 className="fw-bold text-dark mb-2">Welcome Back</h2>
                  <p className="text-muted">Sign in to your internship account</p>
                </div>

                {message && (
                  <div
                    className={`alert ${
                      message.startsWith("✅") ? "alert-success" : "alert-danger"
                    } border-0 rounded-3 mb-4`}
                    style={{
                      background: message.startsWith("✅")
                        ? "linear-gradient(45deg, #d4edda, #c3e6cb)"
                        : "linear-gradient(45deg, #f8d7da, #f5c6cb)",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <i
                        className={`fas ${message.startsWith("✅") ? "fa-check-circle" : "fa-exclamation-triangle"} me-2`}
                      ></i>
                      {message}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 shadow-sm"
                      id="floatingEmail"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      style={{
                        borderRadius: "15px",
                        background: "rgba(248, 249, 250, 0.8)",
                        fontSize: "1rem",
                      }}
                    />
                    <label htmlFor="floatingEmail">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email Address
                    </label>
                  </div>

                  {/* Password Field */}
                  <div className="form-floating mb-4 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control border-0 shadow-sm pe-5"
                      id="floatingPassword"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      style={{
                        borderRadius: "15px",
                        background: "rgba(248, 249, 250, 0.8)",
                        fontSize: "1rem",
                      }}
                    />
                    <label htmlFor="floatingPassword">
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Password
                    </label>
                    <button
                      type="button"
                      className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-3 p-0 border-0"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ zIndex: 10 }}
                    >
                      <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-muted`}></i>
                    </button>
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg shadow-sm"
                      disabled={loading}
                      style={{
                        borderRadius: "15px",
                        background: loading
                          ? "linear-gradient(45deg, #6c757d, #5a6268)"
                          : "linear-gradient(45deg, #667eea, #764ba2)",
                        border: "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-sign-in-alt me-2"></i>
                          Sign In
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <a href="#" className="text-decoration-none text-muted small me-3">
                      <i className="fas fa-key me-1"></i>
                      Forgot Password?
                    </a>
                    <a href="/signup" className="text-decoration-none small">
                      <i className="fas fa-user-plus me-1"></i>
                      Create Account
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-white-50 small mb-0">
                <i className="fas fa-shield-alt me-1"></i>
                Secure login powered by advanced encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  )
}

export default Login
