import { useState } from 'react'
import './App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#FFFFFF');

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor(){
    //#6789f2
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = "#";

    for(let i=0; i<6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }

    console.log(hexColor);
    setColor(hexColor)
  }

  function handleCreateRandomRgbColor(){
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb${r},${g},${b}`);
  }

  return (
    <div style={{
      width:'100vw',
      height: '100vh',
      background: color,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
     
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '60px',
        marginTop: '50px'
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>

      </div>
    </div>
  )
}

export default App