import { useState } from "react";
import HideButton from "./HideButton";
import ShowSpan from "./ShowSpan";

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
}) {
  const [hidden, setHidden] = useState("hidden");

  const handleHide = () => {
    console.log(ticket);
    setHiddenTickets([...hiddenTickets, ticket]);
    console.log(hiddenTickets);
  };
  const showMore = () => {
    setHidden("shown");
  };

  const showLess = () => {
    setHidden("hidden");
  };

  if (hiddenTickets.includes(ticket)) {
    return null;
  }
  return (
    <div className="ticket">
      <div className="ticket-header">
        <HideButton handleHide={handleHide} updateCounter={updateCounter} />
        <h3>{title}</h3>
      </div>
      <div className="ticket-labels">
        <span>
          {labels?.map((label) => (
            <label className={`label ${label}`}>{label}</label>
          ))}
        </span>
      </div>
      <div className={hidden}>
        <p className="ticket-content">
          {content}
          <br />
        </p>
      </div>
      <ShowSpan showMore={showMore} showLess={showLess} />
      By {userEmail} | {creationTime}
    </div>
  );
}

export default Ticket;
