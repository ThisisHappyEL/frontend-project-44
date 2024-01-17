const threeRoundsGame = (gameModule, playerName) => {
  let resultForGame;
  for (let i = 0; i < 3; i += 1) {
    resultForGame = gameModule();
    if (resultForGame === 'Defeat') {
      return 'Lose to the Game';
    }
  }
  console.log(`Congratulations, ${playerName}!`);
  return 'Win to the Game';
};

export default threeRoundsGame;
