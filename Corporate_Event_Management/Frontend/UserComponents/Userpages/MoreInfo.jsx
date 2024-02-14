import "../Userstyles/MoreInfo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./BookForm";

const MoreInfo = ({ token, userid }) => {
  const customAxios = axios.create({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    responseType: "json",
    withCredentials: true,
  });

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [openForms, setOpenForms] = useState([]);

  const handleOpenForm = (index) => {
    const newOpenForms = [...openForms];
    newOpenForms[index] = true;
    setOpenForms(newOpenForms);
  };

  const handleCloseForm = (index) => {
    const newOpenForms = [...openForms];
    newOpenForms[index] = false;
    setOpenForms(newOpenForms);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.log("No token provided");
          return;
        }
        const response = await customAxios.get(
          "http://localhost:5001/api/user/rights/getallevent"
        );
        if (response.data) {
          let eventData = Array.isArray(response.data)
            ? response.data
            : [response.data];
          setData(eventData);
          setOpenForms(Array(eventData.length).fill(false));
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pbody">
      <h1>Available Events</h1>
      <div className="card-grid">
        {data.length > 0 ? (
          data.map((evt, index) => (
            <div key={evt.eventname} className="card">
              <div
                className="card-details"
                onClick={() => handleOpenForm(index)}
              >
                <img
                  src={evt.eventimg}
                  style={{ height: "150px", width: "200px" }}
                  alt={evt.eventname}
                />
                <h3>{evt.eventname}</h3>
                <p>{evt.eventdesc}</p>
              </div>
              {openForms[index] && (
                <div className="modelsscontainer">
                  <div className="modelsscontent">
                    <BookForm
                      token={token}
                      userid={userid}
                      handleCloseForm={() => handleCloseForm(index)}
                    />
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;
