import React from "react";
import { useNavigate } from "react-router-dom";
import "./RequestedPage.css";

const RequestedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>📋 Your Requested Services</h1>
      <p>
        Welcome to the **Requested Services Page!** This section will allow you to **review, manage, and track all service requests** you've made through our platform.
      </p>

      <p>🚧 <strong>This feature is currently under development.</strong> 🚧</p>

      <p>Once available, you will be able to:</p>
      <ul>
        <li>✅ View a list of all requested laundry services.</li>
        <li>🔄 Modify or cancel pending requests before they are processed.</li>
        <li>📅 Track estimated completion times for each request.</li>
        <li>💬 Communicate with service providers about your requests.</li>
      </ul>

      <p>We appreciate your patience as we enhance this feature. Stay tuned for updates! 🚀</p>

      {/* ✅ Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>⬅ Go Back to Home</button>
    </div>
  );
};

export default RequestedPage;
