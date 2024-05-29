import { useState, useEffect } from "react";
import logo from "./assets/images/maxresdefault.jpg";

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  function onSubmit(message) {
    let newMessage = message.trim();
    if (newMessage.match(/^[A-Z\s]+\s\?$/)) {
      console.log("Calmez-vous, je sais ce que je fais !");
      setResponse("Calmez-vous, je sais ce que je fais !")
      return "Calmez-vous, je sais ce que je fais !";
    } else if (newMessage.match(/^[A-Z]+$/)) {
      console.log("Whoa, calmos !");
      setResponse("Whoa, calmos !")
      return "Whoa, calmos !";
    } else if (newMessage.match(/^[a-z].*\?$/i)) {
      console.log("Bien sûr.");
      setResponse("Bien sûr.")
      return "Bien sûr.";
    } else if (newMessage.match(/^\s*$/)) {
      console.log("Bien, on fait comme ça !");
      setResponse("Bien, on fait comme ça !")
      return "Bien, on fait comme ça !";
    } else {
      console.log("Peu importe !");
      setResponse("Peu importe !")
      return "Peu importe !";
    } 
  }



  const handleSubmit = (event) => {
    console.log("jai appuier", text);
    event.preventDefault();
    onSubmit(text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>

      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1 className="text-center">Teenage Boy Speaking</h1>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="col-8 pt-5">
            <div className="mt-5 thought">
              {/* GGGggggggghhhh ! */}

                <div>
                  <label htmlFor="message-output">Message Input:</label>
                  <h2 id="message-output">{text}</h2>
                </div>

                <div>
                  <label htmlFor="message-output">Message Output:</label>
                  <h3 id="message-output">{response}</h3>
                </div>
            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
          <div className="col text-center">
            <form
              onSubmit={handleSubmit}
              action=""
              className="form-inline justify-content-center"
            >
              <div className="form-group">
                <input
                  className="form-control mr-2"
                  type="text"
                  placeholder="message"
                  //value={text}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-outline-dark"
                  type="submit"
                  value="parler"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
