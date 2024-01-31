import '../styles/EventBox.css';
import CreateEvent from './CreateEvent';
function EventBox() {
    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                    <CreateEvent />
                </div>
            </div>
        </div>
    )
}
export default EventBox