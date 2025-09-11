"use client"

import { useState } from "react"
import api from "../../api" // axios instance
import { useNavigate } from "react-router-dom"

function InternshipForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    course: "Btech",
    year: "",
    companyName: "",
    role: "",
    location: "",
    duration: "",
    internshipType: "Paid",
    salary: "",
    feedback: "",
  })
  const [offerLetter, setOfferLetter] = useState(null)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" })
    }
  }

  const handleFileChange = (e) => {
    setOfferLetter(e.target.files[0])
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.year.trim()) newErrors.year = "Year is required"
    if (!form.companyName.trim()) newErrors.companyName = "Company name is required"
    if (!form.role.trim()) newErrors.role = "Role is required"
    if (!form.location.trim()) newErrors.location = "Location is required"
    if (!form.duration.trim()) newErrors.duration = "Duration is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")

    if (!validateForm()) {
      setMessage("Please fill in all required fields")
      return
    }

    setIsLoading(true)

    try {
      const formData = new FormData()
      for (const key in form) {
        formData.append(key, form[key])
      }
      if (offerLetter) formData.append("offerLetter", offerLetter)

      const res = await api.post("/internship/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      setMessage("✅ Internship submitted successfully!")
      setTimeout(() => navigate("/"), 2000) // redirect after success
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 0;
          margin-bottom: 50px;
        }
        .form-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          padding: 40px;
          margin-bottom: 30px;
        }
        .step-indicator {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }
        .step {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .step.active {
          background: #667eea;
          color: white;
        }
        .step.completed {
          background: #28a745;
          color: white;
        }
        .step.inactive {
          background: #e9ecef;
          color: #6c757d;
        }
        .floating-label {
          position: relative;
          margin-bottom: 25px;
        }
        .floating-label input,
        .floating-label select,
        .floating-label textarea {
          border: 2px solid #e9ecef;
          border-radius: 10px;
          padding: 15px;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        .floating-label input:focus,
        .floating-label select:focus,
        .floating-label textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        .floating-label label {
          position: absolute;
          top: 15px;
          left: 15px;
          color: #6c757d;
          font-size: 16px;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .floating-label input:focus + label,
        .floating-label input:not(:placeholder-shown) + label,
        .floating-label select:focus + label,
        .floating-label textarea:focus + label,
        .floating-label textarea:not(:placeholder-shown) + label {
          top: -10px;
          left: 10px;
          font-size: 12px;
          color: #667eea;
          background: white;
          padding: 0 5px;
        }
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 25px;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
        .alert-custom {
          border-radius: 10px;
          padding: 15px 20px;
          margin-bottom: 25px;
          border: none;
        }
        .file-upload-area {
          border: 2px dashed #667eea;
          border-radius: 10px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .file-upload-area:hover {
          background: rgba(102, 126, 234, 0.05);
        }
        .progress-bar-custom {
          height: 6px;
          border-radius: 3px;
          background: #e9ecef;
          margin-bottom: 30px;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
        }
      `}</style>

      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                <i className="fas fa-briefcase me-3"></i>
                Submit Your Internship Details
              </h1>
              <p className="lead mb-0">Share your internship experience and help us track your professional journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="progress-bar-custom">
              <div className="progress-fill" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
            </div>

            <div className="step-indicator">
              <div className={`step ${currentStep >= 1 ? "active" : "inactive"}`}>1</div>
              <div className={`step ${currentStep >= 2 ? "active" : "inactive"}`}>2</div>
              <div className={`step ${currentStep >= 3 ? "active" : "inactive"}`}>3</div>
            </div>

            <div className="form-card">
              {message && (
                <div className={`alert-custom ${message.includes("✅") ? "alert-success" : "alert-danger"}`}>
                  <i
                    className={`fas ${message.includes("✅") ? "fa-check-circle" : "fa-exclamation-triangle"} me-2`}
                  ></i>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {currentStep === 1 && (
                  <div>
                    <h3 className="mb-4 text-center">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Personal Information
                    </h3>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="name"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            value={form.name}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                          <label>Full Name</label>
                          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="floating-label">
                          <select
                            name="course"
                            className="form-select"
                            value={form.course}
                            onChange={handleChange}
                            required
                          >
                            <option value="Btech">B.Tech</option>
                            <option value="Mca">MCA</option>
                            <option value="Mba">MBA</option>
                          </select>
                          <label>Course</label>
                        </div>
                      </div>
                    </div>

                    <div className="floating-label">
                      <input
                        type="text"
                        name="year"
                        className={`form-control ${errors.year ? "is-invalid" : ""}`}
                        value={form.year}
                        onChange={handleChange}
                        placeholder=" "
                        required
                      />
                      <label>Academic Year</label>
                      {errors.year && <div className="invalid-feedback">{errors.year}</div>}
                    </div>

                    <div className="text-end">
                      <button type="button" className="btn btn-gradient" onClick={nextStep}>
                        Next Step <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h3 className="mb-4 text-center">
                      <i className="fas fa-building me-2 text-primary"></i>
                      Company Information
                    </h3>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="companyName"
                            className={`form-control ${errors.companyName ? "is-invalid" : ""}`}
                            value={form.companyName}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                          <label>Company Name</label>
                          {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="role"
                            className={`form-control ${errors.role ? "is-invalid" : ""}`}
                            value={form.role}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                          <label>Role/Position</label>
                          {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="location"
                            className={`form-control ${errors.location ? "is-invalid" : ""}`}
                            value={form.location}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                          <label>Location</label>
                          {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="duration"
                            className={`form-control ${errors.duration ? "is-invalid" : ""}`}
                            value={form.duration}
                            onChange={handleChange}
                            placeholder=" "
                            required
                          />
                          <label>Duration</label>
                          {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="floating-label">
                          <select
                            name="internshipType"
                            className="form-select"
                            value={form.internshipType}
                            onChange={handleChange}
                            required
                          >
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                          </select>
                          <label>Internship Type</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="floating-label">
                          <input
                            type="text"
                            name="salary"
                            className="form-control"
                            value={form.salary}
                            onChange={handleChange}
                            placeholder=" "
                          />
                          <label>Salary (if paid)</label>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
                        <i className="fas fa-arrow-left me-2"></i> Previous
                      </button>
                      <button type="button" className="btn btn-gradient" onClick={nextStep}>
                        Next Step <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h3 className="mb-4 text-center">
                      <i className="fas fa-file-upload me-2 text-primary"></i>
                      Documents & Feedback
                    </h3>

                    <div className="file-upload-area mb-4" onClick={() => document.getElementById("fileInput").click()}>
                      <i className="fas fa-cloud-upload-alt fa-3x text-primary mb-3"></i>
                      <h5>Upload Offer Letter</h5>
                      <p className="text-muted">Click here or drag and drop your offer letter</p>
                      <input
                        id="fileInput"
                        type="file"
                        className="d-none"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                      {offerLetter && (
                        <div className="mt-3">
                          <i className="fas fa-file me-2 text-success"></i>
                          <span className="text-success">{offerLetter.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="floating-label">
                      <textarea
                        name="feedback"
                        className="form-control"
                        value={form.feedback}
                        onChange={handleChange}
                        placeholder=" "
                        rows="4"
                      ></textarea>
                      <label>Feedback & Experience</label>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
                        <i className="fas fa-arrow-left me-2"></i> Previous
                      </button>
                      <button type="submit" className="btn btn-gradient" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Submit Application
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </>
  )
}

export default InternshipForm
