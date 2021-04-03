import { useState } from "react";

function ShowSpan({ showMore, showLess }) {
  const [shown, setShown] = useState(false);

  const show = () => {
    setShown(true);
    showMore();
  };

  const unshow = () => {
    setShown(false);
    showLess();
  };

  if (shown) {
    return <span onClick={() => unshow()}>Show less</span>;
  } else {
    return <span onClick={() => show()}>Show more</span>;
  }
}
export default ShowSpan;
