export default function Feedback({ onClick, onReset, showReset }) {
  return (
    <div className="flex space-x-2">
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {showReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
