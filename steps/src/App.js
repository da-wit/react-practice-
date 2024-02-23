import { useState } from "react";
const message = ["Learn React js", "Applay for jops", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);

  // const [visibility, setDisplay] = useState("block");
  const [visibility, setDisplay] = useState(true);

  function handlePrevious() {
    return step > 1 ? setStep(step - 1) : null;
  }

  function handleNext() {
    return step < message.length ? setStep(step + 1) : null;
  }

  // function handleDisplay(){
  //   return visibility === true? setDisplay(false): setDisplay(true)

  // }

  return (
    <>
      <h1 onClick={() => setDisplay(!visibility)}> &#9830;</h1>
      {visibility && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : null} `}>1</div>
            <div className={`${step >= 2 ? "active" : null} `}>2</div>
            <div className={`${step >= 3 ? "active" : null} `}>3</div>
          </div>

          <p className="message">
            Step {step}: {`${message[step - 1]}`}
          </p>

          <div className="buttons">
            <Button
              bg="purple"
              color="white"
              handler={handlePrevious}
              // text="Previous"
              // emoji="👈"
            >
              <span>👈</span>
              Previous
            </Button>
            <Button
              bg="purple"
              color="white"
              handler={handleNext}
              // text="Next"
              // emoji="👉"
            >
              Next
              <span>👉</span>
            </Button>
          </div>

          {/* <div className="buttons">
            <button
              style={{ backgroundColor: "purple", color: "red" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div> */}
        </div>
      )}
      <Steps />
    </>
  );
}
// {text, emoji} will be replaced by children ---
function Button({ bg, color, handler, children }) {
  return (
    <button style={{ backgroundColor: bg, color: color }} onClick={handler}>
      {/* <span>{emoji}</span>
      {text} */}
      {children}
    </button>
  );
}

function Steps() {
  const [steps, setSteps] = useState(0);
  function handleUpStep() {
    setSteps(steps + 1);
  }
  function handleDownStep() {
    return setSteps(steps - 1);
  }

  const [count, setCount] = useState(steps);
  function handleUpCount() {
    return setCount(steps < 0 ? count - steps : count + steps);
  }
  function handleDownCount() {
    return setCount(steps > 0 ? count - steps : count + steps);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="ste">
        {/* <button onClick={handleDownStep}>-</button>
        <p>Step: {steps}</p>
        <button onClick={handleUpStep}>+</button> */}
        <Button bg="black" color="white" handler={handleDownStep}>
          -
        </Button>
        <p>Step: {steps}</p>
        <Button bg="black" color="white" handler={handleUpStep}>
          +
        </Button>
      </div>

      <div className="ste">
        {/* <button onClick={handleDownCount}>-</button>
        <p>Count:{count}</p>
        <button onClick={handleUpCount}>+</button> */}
        <Button bg="black" color="white" handler={handleDownCount}>
          -
        </Button>
        <p>Count:{count}</p>
        <Button bg="black" color="white" handler={handleUpCount}>
          +
        </Button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} Days away from today `
          : `${Math.abs(count)} Days ago was `}
        {date.toDateString()}
      </p>
    </>
  );
}

const quiz = [
  { id: 1, question: "What is your name", answer: "dawit" },
  { id: 2, question: "What is your name", answer: "kidus" },
  { id: 3, question: "What is your name", answer: "lala" },
  { id: 4, question: "How old are you", answer: "12" },
  { id: 5, question: "How old are you", answer: "2" },
  { id: 6, question: "How old are you", answer: "89" },
];

export function Question() {
  const [curerntdId, setId] = useState(null);
  function answers(id) {
    return setId(id);
  }

  return (
    <div className="card">
      {quiz.map((items) => (
        <div
          key={items.id}
          className={curerntdId === items.id ? "answer" : ""}
          onClick={() => answers(items.id)}
        >
          <p>{curerntdId === items.id ? items.answer : items.question}</p>
        </div>
      ))}
    </div>
  );
}

export function Counter() {
  const [range, setRange] = useState(1);

  const [counter, setCount] = useState(0);

  function down() {
    return setCount(counter - range);
  }

  function up() {
    return setCount(counter + range);
  }

  function reset() {
    setRange(1);
    setCount(0);
  }

  const time = new Date();
  time.setDate(time.getDate() + counter);
  return (
    <div>
      <span>
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
      </span>
      <span>{range}</span>
      <div>
        <button onClick={down}>➖</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={up}>➕</button>
      </div>
      <p>
        {counter === 0
          ? `Today is ${time.toDateString()}`
          : counter > 0
          ? `Today is ${counter} days from  ${time.toDateString()}`
          : `${Math.abs(counter)} Days ago was ${time.toDateString()}`}
      </p>
      <button onClick={reset} className={Math.abs(counter) === 0 ? "btn1" : ""}>
        Reset
      </button>
    </div>
  );
}
