//your code here
function removeArticles(touristSpots) {
  const articles = ['The', 'A', 'An'];
  const filteredSpots = touristSpots.filter((spot) => {
    const firstWord = spot.split(' ')[0];
    return !articles.includes(firstWord);
  });
  return filteredSpots;
}



   console.log (touristSpots.map(removeArticles)
    .sort((a, b) => a.localeCompare(b));)
