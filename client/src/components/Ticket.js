import { useState } from "react";
import HideButton from "./HideButton";
import ShowSpan from "./ShowSpan";
import DoneButton from "./DoneButton";

function Ticket({
  ticket,
  title,
  content,
  userEmail,
  creationTime,
  labels,
  updateCounter,
  hiddenTickets,
  setHiddenTickets,
  setShow,
  setTitle,
}) {
  const [done, setDone] = useState("undone");
  const changeDone = () => {
    if (done === "done") {
      setDone("undone");
    } else {
      setDone("done");
    }
  };

  const handleHide = () => {
    console.log(ticket);
    setHiddenTickets([...hiddenTickets, ticket]);
    console.log(hiddenTickets);
  };

  if (hiddenTickets.includes(ticket)) {
    return null;
  }
  let classname = "ticket ";
  classname = classname + done;
  return (
    <div className={classname}>
      <div className="ticket-header">
        <HideButton handleHide={handleHide} updateCounter={updateCounter} />
        <DoneButton changeDone={changeDone} />
        <h3 className={done}>{title}</h3>
      </div>
      <div className="ticket-labels">
        <span>
          {labels?.map((label) => (
            <label className={`label ${label}`}>{label}</label>
          ))}
        </span>
      </div>
      <div className="hidden">
        <p className="ticket-content">
          {content}
          <br />
        </p>
      </div>
      <ShowSpan
        setShow={setShow}
        content={ticket.content}
        setTitle={setTitle}
        title={ticket.title}
      />
      By {userEmail}
      <br />
      {creationTime}
    </div>
  );
}

export default Ticket;
