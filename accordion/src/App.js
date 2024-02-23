// import Accordion from "./components/main";
// import Hello from "./components/hello";
import { useState } from "react";

export default function App() {
  return (
    <div>
      {/* <Accordion />
      <Hello /> */}
      <Calc />
    </div>
  );
}

function Calc() {
  const [input, setInput] = useState("");

  const [select, setSelect] = useState(0);
  const [secSelect, setSecSelect] = useState(0);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSelect(e) {
    return setSelect(e.target.value);
  }

  function handleSecSelect(e) {
    return setSecSelect(e.target.value);
  }
  const percent = (Number(input) * select) / 100;
  const percent_2 = (Number(input) * secSelect) / 100;
  const tip = (percent + percent_2) / 2;

  function reset() {
    setSelect(0);
    setSecSelect(0);
    setInput("");
  }

  return (
    <div>
      <Input input={input} handleInput={handleInput} />
      <Label select={select} handle={handleSelect}>
        How did you like the service?
      </Label>
      <Label select={secSelect} handle={handleSecSelect}>
        How did you friend like the service?
      </Label>

      {input && (
        <div>
          <Result input={input} tip={tip} />

          <Button reset={reset} />
        </div>
      )}

      {/* <label>How did you like the service? </label>
      <select value={select} onChange={handleSelect}>
        <option value={0}>Dissatisfayed(0%)</option>
        <option value={5}>okay(5%)</option>
        <option value={10}>Good(10%)</option>
        <option value={20}>Amazing(20%)</option>
      </select>
      <br />
      <label>How did you friend like the service? </label>
      <select value={select} onChange={handleSelect}>
        <option value={0}>Dissatisfayed(0%)</option>
        <option value={5}>okay(5%)</option>
        <option value={10}>Good(10%)</option>
        <option value={20}>Amazing(20%)</option>
      </select> */}
    </div>
  );
}

function Label({ select, handle, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={select} onChange={handle}>
        <option value={0}>Dissatisfayed(0%)</option>
        <option value={5}>okay(5%)</option>
        <option value={10}>Good(10%)</option>
        <option value={20}>Amazing(20%)</option>
      </select>
      <br />
    </div>
  );
}

function Input({ input, handleInput }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={input}
        placeholder="amount"
        onChange={handleInput}
      />
    </div>
  );
}

function Result({ input, tip }) {
  return (
    <h2>
      You pay {Number(input) + tip} ({input} + {tip} tip)
    </h2>
  );
}

function Button({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
