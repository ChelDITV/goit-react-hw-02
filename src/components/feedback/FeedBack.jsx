export default function Feedback({ feedback, totalFeedback }) {
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}
