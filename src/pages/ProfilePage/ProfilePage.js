import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>👤 User Profile</h1>
      <p>
        Welcome to your **Profile Page!** Here, you will be able to **manage your personal details, update account preferences, and customize your experience** on our platform.
      </p>

      <p>🚧 <strong>This feature is currently under development.</strong> 🚧</p>

      <p>Once this feature is live, you will be able to:</p>
      <ul>
        <li>✏️ Edit your profile information (Name, Email, Phone Number).</li>
        <li>🔐 Change your password and update security settings.</li>
        <li>📜 View your order history and saved businesses.</li>
        <li>⚙️ Customize notifications and app preferences.</li>
      </ul>

      <p>Stay tuned for updates as we work on improving your experience! 🚀</p>

      {/* ✅ Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>⬅ Go Back to Home</button>
    </div>
  );
};

export default ProfilePage;
