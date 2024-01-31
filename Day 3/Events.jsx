import { useState } from 'react';
import '../styles/Events.css'
import noevent from '../asset/noevent.png'
import EventBox from './EventBox';
import {FaTrash} from 'react-icons/fa'
function Events() {
    //handling the dialog box
    const[openbox,setOpenBox] = useState(false);
    const handleOpenBox = () => {
        setOpenBox(true);
    }
    const handleCloseBox = () => {
        setOpenBox(false);
    }
    //handling upcoming and past events
    const [selectButton, setSelectButton] = useState('upcoming');
    const handleTabClick = (tab) => {
        setSelectButton(tab);
    };
    const UpcomingEvents = () => (
        <div className="events">
            <img src={noevent} height={300}/>
            <h2>No Upcoming Events</h2>
            <p>You have no upcoming events. Why not host one?</p>
            <button className='create-event' onClick={handleOpenBox} >Create Event</button>
        </div>
    );
    const PastEvents = () => (
        <div className="events">
            <img src={noevent} height={300}/>
            <h2>No Past Events</h2>
            <p>You have no past events. Why not host one?</p>
        </div>
    );
    return (
        <div id="event">
            <div className="event-page">
                <div className='event-items'>
                    <h1>Events</h1>
                    <div>
                    {['upcoming', 'past'].map(tab => (
                        <button key={tab} className={`event-toggle ${selectButton === tab ? 'active' : ''}`} onClick={() => handleTabClick(tab)}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                    </div>
                </div>
                    {openbox && (
                        <div>
                            <div className='close-container' onClick={handleCloseBox}><FaTrash className='close-icon' /></div>
                            <EventBox/>
                        </div>
                    )}
                <div className='event-list'>
                    {selectButton === 'upcoming' ? <UpcomingEvents /> : <PastEvents />}
                </div>
            </div>
        </div>
    )
}
export default Events