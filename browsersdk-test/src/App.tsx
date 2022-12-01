import {useState, useEffect} from 'react';
import Typicode from "browser-sdk"
import './App.css';
let client: any;
function App() {
  const [message, setMessage] = useState("");
  useEffect(()=>{
    client = new Typicode({
      elementId: "listingElement",
      connectionUrl: "ws://localhost:8081"
    })
  }, [])
  const sendMessage = () => {
    client.sendMassage(message)
  }
  return (
    <div className="App">
      <ul id="listingElement"></ul>
      <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
      <br/>
      <button onClick={()=>sendMessage()} >Send Message</button>
    </div>
  );
}

export default App;
