// import { useState } from 'react';
// import '../styles/Events.css'
// import noevent from '../asset/noevent.png'
// import NavBar from './NavBar'
// import {FaTrash} from 'react-icons/fa'
// import CreateEvent from './CreateEvent';
// function Events() {
//     //handling the dialog box
//     const[openbox,setOpenBox] = useState(false);
//     const handleOpenBox = () => {
//         setOpenBox(true);
//     }
//     const handleCloseBox = () => {
//         setOpenBox(false);
//     }
//     //handling upcoming and past events
//     const [selectButton, setSelectButton] = useState('upcoming');
//     const handleTabClick = (tab) => {
//         setSelectButton(tab);
//     };
//     const UpcomingEvents = () => (
//         <div className="events">
//             <img src={noevent} height={300}/>
//             <h2>No Upcoming Events</h2>
//             <p>You have no upcoming events. Why not host one?</p>
//             <button className='create-event' onClick={handleOpenBox} >Create Event</button>
//         </div>
//     );
//     const PastEvents = () => (
//         <div className="events">
//             <img src={noevent} height={300}/>
//             <h2>No Past Events</h2>
//             <p>You have no past events. Why not host one?</p>
//         </div>
//     );
//     return (
//         <div id="event">
//             <NavBar/>
//             <div className="event-page">
//                 <div className='event-items'>
//                     <h1>Events</h1>
//                     <div>
//                     {['upcoming', 'past'].map(tab => (
//                         <button key={tab} className={`event-toggle ${selectButton === tab ? 'active' : ''}`} onClick={() => handleTabClick(tab)}>
//                             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                         </button>
//                     ))}
//                     </div>
//                 </div>
//                     {openbox && (
//                         <div>
//                             <div className='close-container' onClick={handleCloseBox}><FaTrash className='close-icon' /></div>
//                             <div className="modal-container">
//                                 <div className="modal-content">
//                                     <CreateEvent />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 <div className='event-list'>
//                     {selectButton === 'upcoming' ? <UpcomingEvents /> : <PastEvents />}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Events




import { useState } from "react";
import "../adminstyles/AdminEvents.css";
import noevent from "../adminasset/noevent.png";
import tech from "../adminasset/tech2.jpg";
// import NavBar from "./AdminNavBar";
import AdminCreateEvent from "./AdminCreateEvent";
function Events() {
  const [openEventbox, setOpenEventBox] = useState(false);
  const [selectButton, setSelectButton] = useState("upcoming");
  const [formsData, setFormsData] = useState(null);
  const handleOpenEventBox = () => {
    setOpenEventBox(true);
  };
  const handleCloseEventBox = () => {
    setOpenEventBox(false);
  };
  const handleTabClick = (tab) => {
    setSelectButton(tab);
  };
  const handleEventCreate = (data) => {
    setFormsData(data);
  };
  const UpcomingEvents = () => (
    <div className="events">
      {formsData ? (
        <>
          <div className="created-events-box">
            <div>
              <img src={tech} height={200} width={200} />
            </div>
            <div className="created-events">
              <h1>{formsData.name}</h1>
              <p>Date: {formsData.date}</p>
              <p>Location: {formsData.location}</p>
              <p>Description: {formsData.description}</p>
            </div>
          </div>
          <button className="create-event" onClick={handleOpenEventBox}>
            Create New Event
          </button>
        </>
      ) : (
        <>
          <div className="events">
            <img src={noevent} height={300} alt="No Upcoming Events" />
            <h2>No Upcoming Events</h2>
            <p>You have no upcoming events. Why not host one?</p>
            <button className="create-event" onClick={handleOpenEventBox}>
              Create Event
            </button>
          </div>
        </>
      )}
    </div>
  );
  const PastEvents = () => (
    <div className="events">
      <img src={noevent} height={300} />
      <h2>No Past Events</h2>
      <p>You have no past events. Why not host one?</p>
    </div>
  );
  return (
    <div id="event">
      {/* <NavBar /> */}
      <div className="event-page">
        <div className="event-items">
          <h1>Events</h1>
          <div>
            {["upcoming", "past"].map((tab) => (
              <button key={tab} className={`event-toggle ${selectButton === tab ? "active" : ""}`}onClick={() => handleTabClick(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {openEventbox && (
          <div>
            <div className="modal-container">
              <div className="modal-content">
                <AdminCreateEvent onEventCreate={handleEventCreate}  onCloseBox={handleCloseEventBox}/>
              </div>
            </div>
          </div>
        )}
        <div className="event-list">
          {selectButton === "upcoming" ? <UpcomingEvents /> : <PastEvents />}
        </div>
      </div>
    </div>
  );
}
export default Events;
