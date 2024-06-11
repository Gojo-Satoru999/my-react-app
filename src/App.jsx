// src/App.js

import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "YourFirstName";

const App = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
    </div>
  );
};

export default App;
