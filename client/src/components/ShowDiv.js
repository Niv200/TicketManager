function ShowDiv({ content, setShow, title }) {
  if (!content) {
    return <div>{content}</div>;
  } else {
    return (
      <div className="showdiv">
        <h1 className="showheader">{title}</h1>
        {content}
        <br />
        <button onClick={() => setShow("")}>close</button>
      </div>
    );
  }
}
export default ShowDiv;
