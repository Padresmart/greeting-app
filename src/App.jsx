// src/App.js
import React from 'react';

function App() {
  const currentHour = new Date().getHours();
  let greeting = '';
  let style = {};

  if (currentHour < 12) {
    greeting = 'Good morning';
    style.color = 'red';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
    style.color = 'green';
  } else {
    greeting = 'Good evening';
    style.color = 'blue';
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1
        style={style}
        className="font-bold text-[50px] border-b-[5px] border-black"
      >
        {greeting}
      </h1>
    </div>
  );
}

export default App;
