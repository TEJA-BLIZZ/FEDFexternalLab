import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Page1 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert(`Button clicked! Input: ${inputValue}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Page 1</h1>
      <Card
        title="Welcome Card"
        content="This is a sample card on Page 1."
        style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}
      />
      <Input
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <Button
        text="Submit"
        onClick={handleClick}
        style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer' }}
      />
    </div>
  );
};

export default Page1;