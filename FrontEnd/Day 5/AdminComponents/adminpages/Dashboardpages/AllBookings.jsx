import { useState } from 'react';
import './AllBookings.css'; 

const AllBookings = () => {
    const [chapterList, setChapterList] = useState([]);
    const [inputevent, setInputEvent] = useState('');
    const addChapter = () => {
        setChapterList((prevList) => [...prevList, inputevent]);
        setInputEvent('');
    };
    const removeChapter = (index) => {
        const updatedList = [...chapterList];
        updatedList.splice(index, 1);
        setChapterList(updatedList);
    };
    const editChapter = (index, newName) => {
        const updatedList = [...chapterList];
        updatedList[index] = newName;
        setChapterList(updatedList);
    };
    const clearAll = () => {
        setChapterList([]);
    };
    return (
        <div className="container1">
        <div className="inputgroup mb-3">
            <input type="text" className="form-control" placeholder="Event Name" value={inputevent} onChange={(e) => setInputEvent(e.target.value)} />
            <button className="editbuttons" onClick={addChapter}>Add</button>
        </div>
        <ul className="container mt-3">
            {chapterList.length > 0 ? (
            chapterList.map((chapter, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                <h3 className="flex-grow-1">{chapter}</h3>
                <button className="editbuttons" onClick={() => editChapter(index, prompt('Enter new chapter name:'))}>
                    Edit
                </button>
                <button className="editbuttons" onClick={() => removeChapter(index)}>
                    Remove
                </button>
                </li>
            ))
            ) : (
            <h3 className="emptyMsg">NOTHING IS IN HERE, PLEASE ADD SOMETHING</h3>
            )}
        </ul>
        {chapterList.length > 0 && (
            <button className="ove" onClick={clearAll}>
            Clear All
            </button>
        )}
        </div>
    );
};

export default AllBookings;
