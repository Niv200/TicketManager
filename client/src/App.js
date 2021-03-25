import logo from "./logo.svg";
import "./App.css";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div className="App">
      <Ticket
        title="titleee"
        content="sssssss"
        userEmail="nivm200"
        creationTime="2018-11-13T12:13:55.544Z"
        labels={[`Corvid`, `Guidelines`]}
      />
    </div>
  );
}

export default App;
