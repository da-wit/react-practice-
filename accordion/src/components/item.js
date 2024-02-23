export default function Item({ objItem, num, curr, setCurr }) {
  // const [init, setInit] = useState(false);
  const init = num === curr;

  function show() {
    // init === false ? setInit(true) : setInit(false);
    // return setInit(!init);
    setCurr(init ? null : num);
  }

  return (
    <>
      <div className={true ? "main1" : "main"} onClick={show}>
        <span className={init ? "num" : "number"}>
          {num < 9 ? `0${num + 1}` : num + 1}
        </span>
        <p className={init ? "pp" : ""}>{objItem.question}</p>
        <div>
          <span>{init ? "➖" : "➕"}</span>
        </div>
      </div>
      <p className={init ? "ans" : "answer"}> {objItem.answer}</p>
    </>
  );
}
