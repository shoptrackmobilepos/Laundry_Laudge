import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrdersPage.css";

const OrdersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>🛒 Your Orders</h1>
      <p>
        Welcome to the **Orders Page!** Here, you will be able to **track the status of your laundry orders, view past orders, and manage ongoing requests** with ease.
      </p>

      <p>🚧 <strong>This feature is currently under development.</strong> 🚧</p>

      <p>Once available, you will be able to:</p>
      <ul>
        <li>📦 Track the progress of active laundry orders in real-time.</li>
        <li>📜 View order history and past transactions.</li>
        <li>🔄 Cancel or modify orders before processing begins.</li>
        <li>💬 Communicate with laundry service providers.</li>
      </ul>

      <p>We appreciate your patience as we work on delivering this feature for you. Stay tuned for updates! 🚀</p>

      {/* ✅ Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>⬅ Go Back to Home</button>
    </div>
  );
};

export default OrdersPage;
