import { useState } from 'react';

const InsecureComponent = () => {
  const [userInput, _] = useState('<script>alert("CodeQL Alert!")</script>');

  return (
    <div>
      <h1>Insecure React Component</h1>
      <div dangerouslySetInnerHTML={{ __html: userInput }}></div>
    </div>
  );
};

export default InsecureComponent;
