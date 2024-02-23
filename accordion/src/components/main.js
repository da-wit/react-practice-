import { useState } from "react";
import Item from "./item";
const answerItems = [
  { question: "what is your name?", answer: "My name is dawit " },
  { question: "How old are you?", answer: "i am 45 years olf" },
  {
    question: "How are you doing these days?",
    answer: "I am doing good, Thanks for your concern",
  },
  { question: "what is your name?", answer: "My name is dawit " },
  { question: "How old are you?", answer: "i am 45 years olf" },
  {
    question: "How are you doing these days?",
    answer: "I am doing good, Thanks for your concern",
  },
  { question: "what is your name?", answer: "My name is dawit " },
  { question: "How old are you?", answer: "i am 45 years olf" },
  {
    question: "How are you doing these days?",
    answer: "I am doing good, Thanks for your concern",
  },
  { question: "what is your name?", answer: "My name is dawit " },
  { question: "How old are you?", answer: "i am 45 years olf" },
  {
    question: "How are you doing these days?",
    answer: "I am doing good, Thanks for your concern",
  },
  { question: "what is your name?", answer: "My name is dawit " },
  { question: "How old are you?", answer: "i am 45 years olf" },
  {
    question: "How are you doing these days?",
    answer: "I am doing good, Thanks for your concern",
  },
];

export default function Accordion() {
  const [curOpen, setCurrOpen] = useState(null);

  return (
    <div className="val">
      {answerItems.map((item, i) => (
        <Item
          objItem={item}
          curr={curOpen}
          setCurr={setCurrOpen}
          key={item.question}
          num={i}
        />
      ))}
    </div>
  );
}
