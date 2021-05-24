import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';



function App() {
  const [message, setMessage] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    window.top.postMessage(message, 'http://localhost:5000')

  }
  const closeIframe = () => {
    let url = 'http://localhost:5000'
          window.top.postMessage("closeIframe", url);
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} className="aboutForm">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write about you</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => { setMessage(e.target.value) }} value={message} />
        </Form.Group>
        <Button variant="success" type="submit">Submit</Button>
      </Form>
      <Button variant="danger" className="m-4" type="click" onClick={closeIframe}>close Iframe</Button>
    </div>
  );
}

export default App;
