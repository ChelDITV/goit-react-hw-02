export default function Statistics({ good, neutral, bad, total }) {
  if (total === 0) return <p>No feedback given yet.</p>;

  const positivePercentage = ((good / total) * 100).toFixed(0);

  return (
    <div>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Good: {good}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
