"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../api"

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const res = await api.post("/auth/register", form)
      setMessage("✅ Registered successfully!")
      console.log("User:", res.data)

      setTimeout(() => {
        navigate("/login")
      }, 1000)
    } catch (err) {
      if (err.response) {
        setMessage("❌ " + err.response.data.message)
      } else {
        setMessage("❌ Something went wrong")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container-fluid py-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            {/* Hero Section */}
            <div className="text-center text-white mb-5">
              <div className="mb-4">
                <i className="fas fa-user-plus fa-4x mb-3" style={{ opacity: 0.9 }}></i>
              </div>
              <h1 className="display-4 fw-bold mb-3">Join Our Platform</h1>
              <p className="lead mb-0">Create your account to access internship management tools</p>
            </div>

            <div
              className="card shadow-lg border-0"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="card-title fw-bold text-dark mb-2">Create Account</h3>
                  <p className="text-muted">Fill in your details to get started</p>
                </div>

                {message && (
                  <div
                    className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"} alert-dismissible fade show`}
                    role="alert"
                  >
                    <i
                      className={`fas ${message.includes("✅") ? "fa-check-circle" : "fa-exclamation-triangle"} me-2`}
                    ></i>
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      id="floatingName"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "15px", paddingLeft: "50px" }}
                    />
                    <label htmlFor="floatingName">
                      <i className="fas fa-user me-2 text-primary"></i>Full Name
                    </label>
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      id="floatingEmail"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "15px", paddingLeft: "50px" }}
                    />
                    <label htmlFor="floatingEmail">
                      <i className="fas fa-envelope me-2 text-primary"></i>Email Address
                    </label>
                  </div>

                  <div className="form-floating mb-4 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control form-control-lg"
                      id="floatingPassword"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "15px", paddingLeft: "50px", paddingRight: "50px" }}
                    />
                    <label htmlFor="floatingPassword">
                      <i className="fas fa-lock me-2 text-primary"></i>Password
                    </label>
                    <button
                      type="button"
                      className="btn position-absolute top-50 end-0 translate-middle-y me-3 border-0 bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ zIndex: 10 }}
                    >
                      <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-muted`}></i>
                    </button>
                  </div>

                  <div className="d-grid mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg fw-bold"
                      disabled={isLoading}
                      style={{
                        borderRadius: "15px",
                        background: "linear-gradient(45deg, #667eea, #764ba2)",
                        border: "none",
                        padding: "15px",
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-user-plus me-2"></i>
                          Create Account
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Already have an account?
                      <button
                        type="button"
                        className="btn btn-link text-primary fw-bold p-0 ms-1"
                        onClick={() => navigate("/login")}
                        style={{ textDecoration: "none" }}
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="row mt-5 text-white text-center">
              <div className="col-4">
                <i className="fas fa-shield-alt fa-2x mb-2" style={{ opacity: 0.8 }}></i>
                <p className="small mb-0">Secure</p>
              </div>
              <div className="col-4">
                <i className="fas fa-clock fa-2x mb-2" style={{ opacity: 0.8 }}></i>
                <p className="small mb-0">Fast Setup</p>
              </div>
              <div className="col-4">
                <i className="fas fa-users fa-2x mb-2" style={{ opacity: 0.8 }}></i>
                <p className="small mb-0">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
