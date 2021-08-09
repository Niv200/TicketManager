import { useState, useEffect } from "react";
import HiddenCounter from "./HiddenCounter";
import Ticket from "./Ticket";
import axios from "axios";
import ShowDiv from "./ShowDiv";

function SearchBox() {
  let ticketArray = [];
  const [count, setCount] = useState(0);
  const [shown, setShown] = useState("");
  const [data, setData] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);
  const [title, setTitle] = useState("");

  const showAll = () => {
    setHiddenTickets([]);
    setCount(0);
  };

  const updateTickets = (args) => {
    if (!args) {
      args = "";
    }
    if (ticketArray.length > 5) {
      let arr = ticketArray.filter((ticket) => ticket.title.include(args));
      setData(arr);
    } else {
      axios.get(`/api/tickets?searchText=` + args).then((res) => {
        let array = res.data;
        ticketArray = array;
        setData(array);
      });
    }
  };

  const setShow = (args) => {
    setShown(args);
  };

  const showButton = () => {
    if (count >= 1) {
      return (
        <button id="restoreHideTickets" onClick={showAll}>
          Show all
        </button>
      );
    }
  };

  useEffect(() => {
    updateTickets("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div id="headdiv">
        <h1 id="title">Tickets Manager</h1>
        <span>
          <input
            id="searchInput"
            className="input"
            type="text"
            placeholder="Look a title up"
            onChange={(e) => updateTickets(e.target.value)}
          />
          <HiddenCounter count={count} showAll={showAll} />
          {showButton()}
        </span>
      </div>
      <ShowDiv content={shown} title={title} setShow={setShow} />
      <div id="tickets">
        {data.map((ticket) => {
          return (
            <Ticket
              key={Math.floor(Math.random() * 100000000000 + 1)}
              ticket={ticket}
              title={ticket.title}
              content={ticket.content}
              userEmail={ticket.userEmail}
              creationTime={ticket.creationTime}
              labels={ticket.labels}
              updateCounter={() => setCount(count + 1)}
              hiddenTickets={hiddenTickets}
              setHiddenTickets={setHiddenTickets}
              setShow={setShow}
              setTitle={setTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchBox;
