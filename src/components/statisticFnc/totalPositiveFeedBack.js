function positiveFeedBacks(good, neutral, bad) {
  return good ? Math.floor((good * 100) / (good + neutral + bad)) : 0;
}

export default positiveFeedBacks;
