import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import image from './image.jpg'
import video from './video.mp4'


function App() {
  return (
    <Fragment >
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={image} />

        <br />

        <img src="/bridge.png" />
      </div>
      <video width="320" height="240" controls>
        <source src={video}type="video/mp4" />
      </video>
      ;
    </Fragment>
  );
}
export default App

