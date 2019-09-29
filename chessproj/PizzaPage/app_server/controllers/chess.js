const gamePage = (req, res) => {
    res.render('chess-page',
      {
        title: 'Chess game area',
        pageHeader: {
          title: 'Chessin8r',
          strapLine: 'Play chess right here!'
        },
        sidebar: "Chess is best",
        board1: Chessboard('board1', 'start')
      }
    );
  };
  module.exports = {
   gamePage
  };