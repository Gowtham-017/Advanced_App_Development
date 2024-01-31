import '../Userstyles/BookForm.css';
import book from '../Userasset/tech3.jpg'
function BookForm() {
    return (
        <div>
            <div className="modelcontainer">
                <div className="modelcontent">
                <div className="evnttcreatebox">
                    <div className='leftbox'>
                        <img src={book} alt='event' height={300} width={300}/>
                    </div>
                    <div className='rightbox'>
                        <form className='eventtdetails'>
                            <h1>Content</h1>
                            <input type="text" placeholder="Event Name"  />
                            <input type="date" />
                            <input type="text" placeholder="Location"  />
                            <button className='creat-button' >Create Event</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default BookForm
