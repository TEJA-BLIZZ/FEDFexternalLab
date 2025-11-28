import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const Page2 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`Email submitted: ${email}`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
      <h1 style={{ color: '#00796b' }}>Page 2</h1>
      <Card
        title="Contact Us"
        content="Fill in your email to contact us."
        style={{ border: '2px solid #004d40', padding: '15px', marginBottom: '20px', backgroundColor: '#b2dfdb' }}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: '10px', padding: '10px', border: '1px solid #004d40' }}
      />
      <Button
        text="Send"
        onClick={handleSubmit}
        style={{ backgroundColor: '#ff5722', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
      />
    </div>
  );
};

export default Page2;