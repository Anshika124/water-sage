import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Issues.css'; // Importing a CSS file for custom styles

const Issues = () => {
  const [open, setOpen] = useState(false);
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({
    title: '',
    description: '',
    media: '',
    type: 'issue',
    latitude: '',
    longitude: 0,
    location: 0, // Will be set by the API
    file: null, // New field to hold the file
  });
  const [currentLocation, setCurrentLocation] = useState(''); // State to hold current location
  const [latitude, setLatitude] = useState(0); // State to hold latitude
  const [longitude, setLongitude] = useState(0); // State to hold longitude

  let local = JSON.parse(localStorage.getItem("userId"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentLocation(''); // Reset location on modal close
    setLatitude(0); // Reset latitude on modal close
    setLongitude(0); // Reset longitude on modal close
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewIssue((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value, // Handle file input
    }));
  };

  const handleGetLocation = async () => {
    try {
      const response = await axios.get(`http://api.ipstack.com/check?access_key=d91ff94e485f7705ae1b0d8ba2ffb213`);
      const { city, region_name, country, latitude, longitude } = response.data;
      const location = `${city}, ${region_name}`;
      setCurrentLocation(location); // Set the fetched location
      setLatitude(latitude); // Set the fetched latitude
      setLongitude(longitude); // Set the fetched longitude
      setNewIssue((prev) => ({
        ...prev,
        location: location, // Set the location in the new issue
        latitude: latitude,
        longitude: longitude
      }));
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('postedBy', local);
    formData.append('title', newIssue.title);
    formData.append('description', newIssue.description);
    formData.append('media', newIssue.media);
    formData.append('type', newIssue.type);
    formData.append('location', newIssue.location);
    formData.append('latitude', newIssue.latitude); // Append latitude
    formData.append('longitude', newIssue.longitude); // Append longitude
    if (newIssue.file) {
      formData.append('file', newIssue.file); // Append the file if selected
    }

    try {
      const response = await axios.post('http://localhost:5000/posts/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIssues((prev) => [...prev, response.data]);
      setNewIssue({ title: '', description: '', media: '', type: 'issue', location: '', file: null }); // Reset the form
      setCurrentLocation(''); // Reset location on submit
      setLatitude(0); // Reset latitude on submit
      setLongitude(0); // Reset longitude on submit
      handleClose();
    } catch (err) {

      console.log('Error adding issue:', err);
    }
  };

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get('http://localhost:5000/posts'); // Adjust the endpoint as needed
      setIssues(response.data);
    };

    fetchIssues();
  }, []);

  return (
    <div className="issues-container">
      <h2>Issues</h2>
      <button className="add-issue-button" onClick={handleClickOpen}>Add an Issue</button>

      {open && (
        <dialog open className="modal">
          <form onSubmit={handleSubmit}>
            <h3>Add New Issue</h3>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newIssue.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={newIssue.description}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={handleGetLocation}>Get Location</button>
            {currentLocation && (
              <p>
                <strong>Current Location:</strong> {currentLocation}
                <br />
                <strong>Latitude:</strong> {latitude}
                <br />
                <strong>Longitude:</strong> {longitude}
              </p>
            )} {/* Display the location, latitude, and longitude */}
            <label>
              Upload Image:
              <input
                type="file"
                name="file"
                accept="image/*" // Accept only image files
                onChange={handleChange}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClose}>Cancel</button>
            </div>
          </form>
        </dialog>
      )}

      <div className="issue-list">
        <h3>Issue List</h3>
        <ul>
          {issues.map((issue) => (
            <li key={issue._id} className="issue-item">
              <div className="issue-content">
                <h4>{issue.title}</h4>
                <p>{issue.description}</p>
                {issue.media && <img src={issue.media} alt="Issue Media" className="issue-image" />} {/* Display the image if exists */}
                {/* <p><strong>Location:</strong> {issue.location}</p> */}
                <p><strong>Latitude:</strong> {issue.latitude}</p> {/* Display the latitude */}
                <p><strong>Longitude:</strong> {issue.longitude}</p> {/* Display the longitude */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Issues;
