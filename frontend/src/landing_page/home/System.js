import React from "react";
import { Upload, FileText, TrendingUp } from "lucide-react";
function System() {
    return (  
         <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Document Management Made Simple</h1>
        <p className="lead">
          Streamlined tools for uploading, reviewing, and managing internship documentation
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        {/* Easy Document Upload */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3 p-3 rounded-circle bg-primary d-inline-flex justify-content-center align-items-center" style={{ width: "64px", height: "64px" }}>
                <Upload className="text-white" size={32} />
              </div>
              <h5 className="card-title fw-bold mt-3">Easy Document Upload</h5>
              <p className="card-text">
                Upload your internship offer letters and certificates with drag-and-drop functionality.
              </p>
              <ul className="list-unstyled text-start">
                <li>• Drag & Drop</li>
                <li>• Auto Validation</li>
                <li>• Secure Storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Document Tracking */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3 p-3 rounded-circle bg-success d-inline-flex justify-content-center align-items-center" style={{ width: "64px", height: "64px" }}>
                <FileText className="text-white" size={32} />
              </div>
              <h5 className="card-title fw-bold mt-3">Document Tracking</h5>
              <p className="card-text">
                Track the status of your uploaded documents, receive notifications, and manage all certificates.
              </p>
              <ul className="list-unstyled text-start">
                <li>• Status Updates</li>
                <li>• Notifications</li>
                <li>• Document History</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Teacher Dashboard */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <div className="mb-3 p-3 rounded-circle bg-warning d-inline-flex justify-content-center align-items-center" style={{ width: "64px", height: "64px" }}>
                <TrendingUp className="text-white" size={32} />
              </div>
              <h5 className="card-title fw-bold mt-3">Teacher Dashboard</h5>
              <p className="card-text">
                Comprehensive review tools for faculty to verify documents, track progress, and generate reports.
              </p>
              <ul className="list-unstyled text-start">
                <li>• Document Review</li>
                <li>• Progress Reports</li>
                <li>• Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default System;