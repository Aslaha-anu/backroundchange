
import React, { useState } from 'react';

function App() {
  // Initialize state for background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change background color based on button click
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', transition: 'background-color 0.5s' }}>
      <h1 style={{fontSize:"50px",marginLeft:"35%",paddingTop:'5%'}}>Backround change</h1>
      <div className='d-flex  justify-content-between'>
        <button onClick={() => changeBackgroundColor('blue')}style={{height:'25px', width:'70px', color:'white', backgroundColor:'blue',borderRadius:'5px', border:'none',marginLeft:'40%'}}> Blue</button>
        <button onClick={() => changeBackgroundColor('green')}style={{height:'25px', width:'70px', color:'white', backgroundColor:'green',borderRadius:'5px', border:'none',marginLeft:'2%'}}> Green</button>
        <button onClick={() => changeBackgroundColor('red')}style={{height:'25px', width:'70px', color:'white', backgroundColor:'red',borderRadius:'5px', border:'none',marginLeft:'2%'}}>red</button>
      </div>
    </div>
  );
}

export default App;