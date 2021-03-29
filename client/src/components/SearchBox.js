import { useState } from "react";
import HiddenCounter from "./HiddenCounter";
import Ticket from "./Ticket";

function SearchBox() {
  //////Testing array, retrieve mongoDB values later
  let arrayTest = [
    <Ticket
      title="titleee"
      content="sssssss"
      userEmail="nivm200"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`test `, `Guidelines`]}
      updateCounter={() => setCount(count + 1)}
    />,
    <Ticket
      title="title2"
      content="2222222222"
      userEmail="nivm200"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`Corvid `, `test`]}
      updateCounter={() => setCount(count + 1)}
    />,
    <Ticket
      title="title3"
      content="33333333"
      userEmail="nivm200"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`Corvid `, `Guidelines`, `API`]}
      updateCounter={() => setCount(count + 1)}
    />,
  ];
  //End of testing array.

  const [count, setCount] = useState(0);
  ////////////////////
  const showAll = () => {
    setCount(0);
    // arrayTest.map((ticket) => {});
  };
  //////////////////
  const showButton = () => {
    if (count >= 1) {
      return <button onClick={showAll}>Show all</button>;
    }
  };
  return (
    <div>
      <span>
        <input type="text" />
        <HiddenCounter count={count} showAll={showAll} />
        {showButton()}
      </span>
      <div>{arrayTest}</div>
    </div>
  );
}

export default SearchBox;
