import { useState } from "react";
import "../adminstyles/AdminDashBoard.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Settings from "./Dashboardpages/Settings";
import AllEvents from "./Dashboardpages/AllEvents";
function DashBoard() {
  const [feed, SetFeed] = useState(false);
  const [event, SetEvent] = useState(false);
  const [pay, SetPay] = useState(false);
  const [settings, SetSettings] = useState(false);
  const handleEvent = () => {
    SetPay(false);
    SetFeed(false);
    SetEvent(true);
    SetSettings(false);
  };
  const handlePay = () => {
    SetPay(true);
    SetFeed(false);
    SetSettings(false);
    SetEvent(false);
  };
  const handleFeed = () => {
    SetFeed(true);
    SetPay(false);
    SetSettings(false);
    SetEvent(false);
  };
  const handleSettings = () => {
    SetFeed(false);
    SetPay(false);
    SetEvent(false);
    SetSettings(true);
  };
  return (
    <div id="verify">
      <div className="vbody">
        <div className="leftbar">
          <Link to="/home">
            <FaHome
              size={30}
              style={{
                margin: "10px 0 0 -110px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </Link>
          <h2 style={{ color: "white" }}>DashBoard</h2>
          <button className="leftbarbtn" onClick={handleEvent}>
            All Events
          </button>
          <button className="leftbarbtn" onClick={handleFeed}>
            Booked Details
          </button>
          <button className="leftbarbtn" onClick={handlePay}>
            Payments
          </button>
          <button className="leftbarbtn" onClick={handleSettings}>
            Settings
          </button>
        </div>
        {event && (
          <>
            <div className="dashboard-nav">
              <h1>All Events</h1>
              <div className="nav-list">
                <a href="">Option</a>
                <a href="">Option</a>
                <a href="">Option</a>
              </div>
            </div>
            <AllEvents />
          </>
        )}
        {feed && (
          <div className="dashboard-nav">
            <h1>Booked Details</h1>
            <div className="nav-list">
              <a href="">Option</a>
              <a href="">Option</a>
              <a href="">Option</a>
            </div>
          </div>
        )}
        {pay && (
          <div className="dashboard-nav">
            <h1>Payments</h1>
            <div className="nav-list">
              <a href="">Option</a>
              <a href="">Option</a>
              <a href="">Option</a>
            </div>
          </div>
        )}
        {settings && (
          <>
            <div className="dashboard-nav">
              <h1>Settings</h1>
              <div className="nav-list">
                <a href="">Option</a>
                <a href="">Option</a>
                <a href="">Option</a>
              </div>
            </div>
            <Settings />
          </>
        )}
      </div>
    </div>
  );
}
export default DashBoard;
