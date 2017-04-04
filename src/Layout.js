import React from 'react';

import boom from '../assets/images/boom.gif';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {children}
      <img src={boom} />
    </div>
  );
}
