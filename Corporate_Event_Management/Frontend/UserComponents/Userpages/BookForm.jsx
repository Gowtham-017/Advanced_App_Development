import "../Userstyles/BookForm.css";
import book from "../Userasset/tech1.jpg";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function BookForm({ handleCloseForm, token, userid }) {
  const customAxios = axios.create({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
    withCredentials: true,
  });
  console.log(token);
  console.log(userid);

  const [ename, setEName] = useState("");
  const handleEName = (e) => {
    setEName(e.target.value);
  };
  const [orgname, setOrgName] = useState("");
  const handleOrgName = (e) => {
    setOrgName(e.target.value);
  };
  const [location, setLocation] = useState("");
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const [edate, setEDate] = useState("");
  const handleDate = (e) => {
    setEDate(e.target.value);
  };
  const [edesc, setEDesc] = useState("");
  const handleEDesc = (e) => {
    setEDesc(e.target.value);
  };

  const handleSubmitE = async (e) => {
    e.preventDefault();
    const data = {
      eventname: ename,
      organisername: orgname,
      location: location,
      date: edate,
      adddesc: edesc,
      userid: userid,
    };
    try {
      const response = await customAxios.post(
        "http://localhost:5001/api/user/rights/postnewbooking",
        data
      );

      console.log("Post Response:", response);

      if (response.status === 200) {
        alert("Successfully Added the Data");
      } else {
        console.error("Unexpected response:", response);
        alert("Error occurred while posting data");
      }
    } catch (error) {
      console.error("Error occurred while posting data:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
      }
      alert("Error occurred while posting data");
    }

    setEName("");
    setEDate("");
    setEDesc("");
    setLocation("");
    setOrgName("");
  };
  return (
    <div>
      <div className="modelccontainer">
        <div className="modelccontent">
          <FaTrash onClick={handleCloseForm} />
          <div className="evnttcreatebox">
            <div className="leftbox">
              {/* <img src={book} alt="event" height={100} width={100} /> */}
            </div>
            <div className="rightbox">
              <form className="eventtdetails" onSubmit={handleSubmitE}>
                <h1>Event</h1>
                <input
                  type="text"
                  placeholder="Event Name"
                  value={ename}
                  onChange={handleEName}
                />
                <input
                  type="text"
                  placeholder="Organiser Name"
                  value={orgname}
                  onChange={handleOrgName}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocation}
                />
                <input type="date" value={edate} onChange={handleDate} />
                <textarea
                  placeholder="Description"
                  value={edesc}
                  onChange={handleEDesc}
                />
                <button className="creat-button">Create Event</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookForm;
