import "./AllEvents.css";
import { useState } from "react";
import tech2 from "../../adminasset/tech2.jpg";
const imageList = [
  { name: "Conference", src: tech2, type: "Conference", budget: "Rs.200" },
  { name: "Meet Up", src: tech2, type: "Meet Up", budget: "Rs.300" },
  { name: "Gathering", src: tech2, type: "Gathering", budget: "Rs.200" },
  { name: "Fun Chat", src: tech2, type: "Fun Chat", budget: "Rs.300" },
  { name: "Chill Out", src: tech2, type: "Chill Out", budget: "Rs.200" },
  { name: "Happy Team", src: tech2, type: "Happy Team", budget: "Rs.300" },
];
function AllEvents() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImageList = imageList.filter((image) =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleInputChange}/>
      </div>
      <div className="imagegrid">
        {/* {imageList.map((image, index) => (
                <div key={index} className='image-container' onClick={() => openModal(image)}>
                <img src={image.src} alt={image.name} />
                <div className='image-details'>
                    <p>{image.name}</p>
                </div>
                </div>
            ))} */}
        {filteredImageList.map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.name} />
            <div className="image-details">
              <p>{image.name}</p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              <center>{selectedImage.name}</center>
              <br />
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="modal-image"
              />
              <br />
              Brand : {selectedImage.type}
              <br />
              Budget : {selectedImage.budget}
            </p>
            <br />
            <h5>Rate the Event</h5>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <span
                  key={starValue}
                  className={`star ${starValue <= rating ? "filled" : ""}`}
                  onClick={() => handleStarClick(starValue)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="review">
              <textarea placeholder="Your Review" />
              <br />
              <br />
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AllEvents;
