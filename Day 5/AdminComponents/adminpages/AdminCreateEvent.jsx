// import '../styles/CreateEvent.css'
// import event from '../asset/logo.jpg'
// import {FaTrash} from 'react-icons/fa'
// import { useState } from 'react'
// function CreateEvent() {
//     const[name,setName] = useState('');
//     const[date,setDate] = useState('');
//     const[location,setLocation] = useState('');
//     const[description,setDescription] = useState('');
//     const [formData, setFormData] = useState(null);
//     const handleName = (e) => {
//         setName(e.target.value);
//     }
//     const handleDate = (e) => {
//         setDate(e.target.value);
//     }
//     const handleLocation = (e) => {
//         setLocation(e.target.value);
//     }
//     const handleDescription = (e) => {
//         setDescription(e.target.value);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             name,
//             date,
//             location,
//             description,
//         };
//         setFormData(data);
//         setName('');
//         setDate('');
//         setLocation('');
//         setDescription('');
//     };
//     const handleSubmitChange = () => {
//         alert('Successfully Created the Event');
//     };
//     return (
//         <div className="create-event-page">
//             <div className='close-icon'><FaTrash/></div>
//             <div className="evnt-create-box">
//                 <div>
//                     <img src={event} alt='event' height={300} width={300}/>
//                 </div>
//                 <div className=''>
//                     <h1>Content</h1>
//                     <form onSubmit={handleSubmit} className='event-details'>
//                         <input type="text" placeholder="Event Name" value={name} onChange={handleName} />
//                         <input type="date" value={date} onChange={handleDate}/>
//                         <input type="text" placeholder="Location" value={location} onChange={handleLocation} />
//                         <textarea placeholder="Description" rows={50} cols={50} value={description} onChange={handleDescription}/>
//                         <button className='create-button' onClick={handleSubmitChange} >Create Event</button>
//                     </form>
//                 </div>
//             </div>
//                 {formData && (
//                     <div className="form-data">
//                         <h2>Event</h2>
//                         <p>Event Name: {formData.name}</p>
//                         <p>Date: {formData.date}</p>
//                         <p>Location: {formData.location}</p>
//                         <p>Description: {formData.description}</p>
//                     </div>
//                 )}
//         </div>
//     )
// }
// export default CreateEvent



import { useState } from 'react';
import '../adminstyles/AdminCreateEvent.css';
import { FaTrash } from 'react-icons/fa';
import event from '../adminasset/logo.jpg'
// eslint-disable-next-line react/prop-types
function AdminCreateEvent({ onEventCreate, onCloseBox }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
        name,
        date,
        location,
        description,
        };
        onEventCreate(data);
        onCloseBox();
        setName('');
        setDate('');
        setLocation('');
        setDescription('');
    };
    return (
        <div className="">
        <div><FaTrash className='close-icon' onClick={onCloseBox} /></div>
        <div className="evntcreatebox">
            <div className='createboxleft'>
            <img src={event} alt='event' height={300} width={300}/>
            </div>
            <div className='createboxright'>
                <form onSubmit={handleSubmit} className='eventdetails'>
                    <h1>Content</h1>
                    <input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <textarea placeholder="Description" rows={5} cols={50} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button className='createbutton'>Create Event</button>
                </form>
            </div>
        </div>
        </div>
    );
}
export default AdminCreateEvent;
