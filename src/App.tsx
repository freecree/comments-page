import React, {useState, useEffect} from 'react';
import Comments from './components/Comments';

export default function App() {

  return (
    <div className="main">
      <div className="container">
        <Comments/>
      </div>
    </div>
  )
}