import { useState } from "react";
import Feedback from "./components/feedback/FeedBack";
import Statistics from "./components/statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [showReset, setShowReset] = useState(false);

  const handleClick = (type) => {
    setShowReset(true);
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
    setTotal(total + 1);
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotal(0);
    setShowReset(false);
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service:</p>
      <Feedback
        onClick={handleClick}
        onReset={handleReset}
        showReset={showReset}
      />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
}
