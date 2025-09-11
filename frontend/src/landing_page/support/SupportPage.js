import React from "react";
import {
  MessageCircle,
  FileText,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  Headphones,
  Send,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <img
            src="media\images\blog-29.png"
            alt="Support Team"
            className="rounded-circle shadow mb-4"
            style={{ maxWidth: "200px" }}
          />
          <h1 className="display-5 fw-bold mb-3">Internship Support Center</h1>
          <p className="lead text-muted mb-4">
            Get help with your internship documentation, track your progress,
            and connect with our support team. We're here to make your internship
            journey smooth and successful.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-primary btn-lg">
              <MessageCircle className="me-2" size={18} />
              Start Live Chat
            </button>
            <button className="btn btn-outline-primary btn-lg">
              <Phone className="me-2" size={18} />
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4">
              <h3 className="text-primary fw-bold">24/7</h3>
              <p className="text-muted">Support Available</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h3 className="text-success fw-bold">98%</h3>
              <p className="text-muted">Issue Resolution</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h3 className="text-purple fw-bold">&lt;2hrs</h3>
              <p className="text-muted">Response Time</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h3 className="text-warning fw-bold">1200+</h3>
              <p className="text-muted">Students Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How Can We Help You?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3 p-3 bg-primary bg-opacity-10 rounded-circle d-inline-block">
                    <FileText size={32} className="text-primary" />
                  </div>
                  <h5 className="card-title">Document Management</h5>
                  <p className="text-muted">
                    Help with uploading, reviewing, and managing your internship
                    documents
                  </p>
                  <ul className="list-unstyled text-muted small mb-3">
                    <li>• Upload troubleshooting</li>
                    <li>• Format requirements</li>
                    <li>• Status tracking</li>
                    <li>• Approval process</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">
                    Get Document Help
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3 p-3 bg-success bg-opacity-10 rounded-circle d-inline-block">
                    <Users size={32} className="text-success" />
                  </div>
                  <h5 className="card-title">Account & Access</h5>
                  <p className="text-muted">
                    Issues with login, permissions, and account management
                  </p>
                  <ul className="list-unstyled text-muted small mb-3">
                    <li>• Login problems</li>
                    <li>• Password reset</li>
                    <li>• Permission issues</li>
                    <li>• Profile updates</li>
                  </ul>
                  <button className="btn btn-outline-success w-100">
                    Account Support
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3 p-3 bg-warning bg-opacity-10 rounded-circle d-inline-block">
                    <BookOpen size={32} className="text-warning" />
                  </div>
                  <h5 className="card-title">Technical Issues</h5>
                  <p className="text-muted">
                    Platform bugs, performance issues, and technical
                    difficulties
                  </p>
                  <ul className="list-unstyled text-muted small mb-3">
                    <li>• Platform errors</li>
                    <li>• Slow loading times</li>
                    <li>• Browser compatibility</li>
                    <li>• Mobile app issues</li>
                  </ul>
                  <button className="btn btn-outline-warning w-100">
                    Technical Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                >
                  How do I upload my internship offer letter?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Go to the upload section, click "Choose Files" or drag and
                  drop. Supported formats: PDF, DOC, DOCX.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  What happens after I submit my documents?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Your documents will be reviewed in 24-48 hours. You’ll get
                  email notifications.
                </div>
              </div>
            </div>

            {/* Add more FAQ items same way */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Still Need Help?</h2>
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card shadow border-0">
                <div className="card-header">
                  <h5 className="mb-0">
                    <Send size={18} className="me-2 text-primary" />
                    Send us a Message
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-100">
                    <Send size={16} className="me-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="card shadow border-0 mb-4">
                <div className="card-body">
                  <h5 className="mb-4">
                    <Headphones size={18} className="me-2 text-success" />
                    Contact Information
                  </h5>
                  <div className="mb-3 d-flex">
                    <Mail className="me-3 text-primary" />
                    <div>
                      <h6>Email Support</h6>
                      <p className="mb-0 text-muted">support@internship.edu</p>
                      <span className="badge bg-secondary">24/7 Available</span>
                    </div>
                  </div>
                  <div className="mb-3 d-flex">
                    <Phone className="me-3 text-success" />
                    <div>
                      <h6>Phone Support</h6>
                      <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                      <span className="badge bg-secondary">
                        Mon-Fri 9AM-6PM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Clock className="me-3 text-warning" />
                    <div>
                      <h6>Office Hours</h6>
                      <p className="mb-0 text-muted">
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                      <p className="mb-0 text-muted">
                        Weekend: Emergency only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary text-white rounded">
                <h5>Need Immediate Help?</h5>
                <p className="mb-3">
                  For urgent issues, use our live chat feature for instant
                  assistance.
                </p>
                <button className="btn btn-light text-primary">
                  <MessageCircle size={16} className="me-2" />
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
