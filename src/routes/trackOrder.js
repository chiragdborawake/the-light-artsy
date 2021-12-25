import { useEffect } from 'react';
import Footer from '../Footer';
export default function TractOrder() {
  useEffect(() => {
    document.title = "Track Order - The Light Artsy"
  }, [])
  const buttonStyle = {
    height: '30px',
    width: '100px',
    color: 'white',
    backgroundColor: '#bfa75d',
    border: 'none',
    margin: '30px'
  }
  const inputStyle = {
    height: '30px',
    width: '300px',
    color: 'white',
  }
  return (

    <>
      <div className='track-order'>
        <h3>Track Shipment</h3>
        <input style={inputStyle} placeholder='Enter order Id or Traching number' type="text"></input><br></br>
        <button style={buttonStyle}>TRACK</button>
      </div>
      <Footer></Footer>
    </>)
} 