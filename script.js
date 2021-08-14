import ScoreboardView from './scoreboardview.js';
let playerOneScore = 0;
let playerTwoScore = 0;
const root = document.querySelector('#application');
const scoreboardView = new ScoreboardView(root,'Player One','Player Two',(player,direction) => {
     const difference = direction === 'minus' ? -1 : 1;
     if(player === 'one'){
          playerOneScore = Math.max(playerOneScore + difference,0);
     }else{
          playerTwoScore = Math.max(playerTwoScore + difference,0);
     }
     scoreboardView.update(playerOneScore,playerTwoScore);
});