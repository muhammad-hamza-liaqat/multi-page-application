import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import Axios

export default function AddCarForm() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    variant: ''
  });

  const [formSaved, setFormSaved] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const saveData = async () => {
    alert(`Make: ${carData.make}, Model: ${carData.model}, Variant: ${carData.variant}`);

    const apiUrl = 'http://localhost:9000/data'; 

    try {
      const response = await axios.post(apiUrl, carData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('Data saved successfully!');
        console.log('Response:', response.data);
      } else {
        alert('Failed to save data.');
        console.error('Response error:', response.status);
      }
    } catch (error) {
      console.error('Error while saving the data into the database:', error);
      alert('An error occurred while saving data. Please try again.');
    }

    setCarData({
      make: '',
      model: '',
      variant: ''
    });
    setFormSaved(true); 
  };

  return (
    <>
      <div className="main flex justify-center mt-10">
        <div className="form flex flex-col">
          {/* Text field for Make */}
          <TextField
            id="make"
            label="Make"
            variant="standard"
            value={carData.make}
            onChange={handleInputChange}
          />
          {/* Text field for Model */}
          <TextField
            id="model"
            label="Model"
            variant="standard"
            value={carData.model}
            onChange={handleInputChange}
          />
          {/* Text field for Variant */}
          <TextField
            id="variant"
            label="Variant"
            variant="standard"
            value={carData.variant}
            onChange={handleInputChange}
          />

          {/* Button to save the data */}
          <div className="btn flex justify-center mt-7">
            <Button variant="contained" onClick={saveData}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
