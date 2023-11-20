import './App.css';
import QRCode from './images/image-qr-code.png';
// import { Link } from 'react-router-dom';
export default App;
 
function App() {
  return (
    <div className = "outer-body">

      <p></p>
      <div className = "body">
        <img className = "image" src = { QRCode } alt = "QRCode" />
        <h1> Improve your front-end skills by building projects. </h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level

        <p>
            Challenge by <a href = "https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a>. <br></br>
        </p>
        </p>
      </div>
    </div>
  );
}


