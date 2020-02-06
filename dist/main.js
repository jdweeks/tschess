import DefaultBoard from '../src/board/DefaultBoard';
import HumanPlayer from '../src/player/HumanPlayer';
import DefaultGame from '../src/game/DefaultGame';
const main = () => {
    const board = new DefaultBoard();
    const player1 = new HumanPlayer();
    const player2 = new HumanPlayer();
    const game = new DefaultGame(board, player1, player2);
};
main();
//# sourceMappingURL=main.js.map