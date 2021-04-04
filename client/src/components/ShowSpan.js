function ShowSpan({ showMore, setShow, content, title, setTitle }) {
  const show = () => {
    setShow(content);
    setTitle(title);
  };
  return <span onClick={() => show()}>Show more</span>;
}
export default ShowSpan;
