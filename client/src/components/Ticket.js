import { useState } from "react";
import HideButton from "./HideButton";

function Ticket({
  title,
  content,
  userEmail,
  creationTime,
  labels,
  updateCounter,
}) {
  const [hidden, setHidden] = useState(false);
  const handleHide = () => {
    if (!hidden) {
      setHidden(true);
    }
  };

  const unsetHidden = () => {
    setHidden(false);
  };

  if (hidden) {
    return null;
  }
  return (
    //Hide button
    <div className="ticket">
      <h3>{title}</h3>
      <HideButton handleHide={handleHide} updateCounter={updateCounter} />
      <p>{content}</p>
      <p>
        By {userEmail} | {creationTime}
      </p>
      <span>
        {labels?.map((label) => (
          <span
            // key={label.id}
            className={label}
          >
            {label + " "}
          </span>
        ))}
      </span>
    </div>
  );
}
export default Ticket;
