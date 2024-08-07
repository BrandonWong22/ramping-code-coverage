import React, { useState } from 'react';

var test = 123;

const VulnerableComponent = () => {
  const [userId, setUserId] = useState('');

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  const handleButtonClick = () => {
    // Insecure use of user input in a URL
    fetch(`/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Errors:', error);
      });
  };

  return (
    <div>
      <input type="text" value={userId} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Fetch User Data</button>
    </div>
  );
};

export default VulnerableComponent;
